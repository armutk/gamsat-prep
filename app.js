// GAMSAT A-to-Z Prep Suite — Main Application Logic

const STORAGE_KEY = "gamsat_az_state_v1";

const defaultState = {
  studentName: "",
  examDate: "2027-03-20",
  targetScore: 72,
  theme: "dark",
  notes: "",
  roadmapChecks: {},
  syllabusChecks: {},
  answers: {},      // { questionId: selectedOptionIndex }
  strikes: {},      // { questionId: [struckIndices] }
  flags: {},        // { questionId: boolean }
  gradedUnits: {},  // { unitId: boolean }
  essays: [],       // [{ id, date, task, theme, words, score, plan, text }]
  errors: [],       // [{ id, date, source, section, cause, what, rule, status }]
  customUnits: [],  // user-added units
  pdfBubbleAnswers: {}, // { qNum: 'A'|'B'|'C'|'D' }
  pdfGradedResults: {}  // { qNum: { correct: 'B', isRight: bool } }
};

let state = loadLocalState();

function loadLocalState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      return { ...defaultState, ...JSON.parse(raw) };
    }
  } catch (e) {
    console.warn("Could not read localStorage", e);
  }
  return structuredClone(defaultState);
}

async function syncFromServer() {
  try {
    const res = await fetch("/api/state", { cache: "no-store" });
    if (res.ok) {
      const serverData = await res.json();
      if (serverData && Object.keys(serverData).length > 0) {
        state = { ...defaultState, ...serverData };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
        renderAll();
      }
    }
  } catch (_) {
    // Running as standalone file:// or offline
  }
}

let saveTimeout = null;
function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {
    console.warn("Local save failed", e);
  }
  const statusEl = document.getElementById("sync-status");
  if (statusEl) statusEl.textContent = "Saving...";
  clearTimeout(saveTimeout);
  saveTimeout = setTimeout(async () => {
    try {
      const res = await fetch("/api/state", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(state)
      });
      if (statusEl) {
        statusEl.textContent = res.ok ? "Saved locally & synced to disk" : "Saved in browser";
      }
    } catch (_) {
      if (statusEl) statusEl.textContent = "Saved in browser (offline mode)";
    }
  }, 300);
}

function getAllUnits() {
  return [...window.GAMSAT_CONTENT.units, ...(state.customUnits || [])];
}

// Navigation
function switchTab(tabId) {
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.tab === tabId);
  });
  document.querySelectorAll(".view-section").forEach((sec) => {
    sec.classList.toggle("active", sec.id === `view-${tabId}`);
  });
}
window.switchTab = switchTab;

function toggleSyllabusSubtab(which) {
  const isChecklist = which === "checklist";
  document.getElementById("syllabus-checklist-view").style.display = isChecklist ? "grid" : "none";
  document.getElementById("syllabus-cheatsheets-view").style.display = isChecklist ? "none" : "grid";
  document.getElementById("subtab-syllabus-btn").className = isChecklist ? "btn btn-primary" : "btn";
  document.getElementById("subtab-cheatsheets-btn").className = isChecklist ? "btn" : "btn btn-primary";
}
window.toggleSyllabusSubtab = toggleSyllabusSubtab;

function togglePdfSubtab(which) {
  const isRunner = which === "runner";
  document.getElementById("pdf-runner-view").style.display = isRunner ? "block" : "none";
  document.getElementById("pdf-custom-view").style.display = isRunner ? "none" : "block";
  document.getElementById("subtab-pdf-runner-btn").className = isRunner ? "btn btn-primary" : "btn";
  document.getElementById("subtab-custom-q-btn").className = isRunner ? "btn" : "btn btn-primary";
}
window.togglePdfSubtab = togglePdfSubtab;

// Theme
function applyTheme() {
  document.body.classList.toggle("light-theme", state.theme === "light");
}

// 1. RENDER DASHBOARD & ROADMAP
function renderDashboard() {
  const nameInput = document.getElementById("setting-name");
  const dateInput = document.getElementById("setting-exam-date");
  const scoreInput = document.getElementById("setting-target-score");
  const notesInput = document.getElementById("dashboard-notes");

  if (document.activeElement !== nameInput) nameInput.value = state.studentName || "";
  if (document.activeElement !== dateInput) dateInput.value = state.examDate || "2027-03-20";
  if (document.activeElement !== scoreInput) scoreInput.value = state.targetScore || 72;
  if (document.activeElement !== notesInput) notesInput.value = state.notes || "";

  document.getElementById("student-name-display").textContent =
    state.studentName && state.studentName.trim() ? state.studentName.trim() : "Doctor-in-Training";

  // Countdown
  const now = new Date();
  const exam = new Date(state.examDate + "T08:00:00");
  const diffDays = Math.ceil((exam - now) / (1000 * 60 * 60 * 24));
  document.getElementById("stat-countdown").textContent =
    diffDays > 0 ? `${diffDays} days` : diffDays === 0 ? "Exam Day!" : "Sitting Passed";
  document.getElementById("stat-target-display").textContent =
    `Target Score: ${state.targetScore || 72}+ (${state.examDate})`;

  // Syllabus + Roadmap completion
  let totalCheckpoints = 0;
  let doneCheckpoints = 0;

  window.GAMSAT_CONTENT.roadmapPhases.forEach((p) => {
    p.tasks.forEach((_, idx) => {
      totalCheckpoints++;
      if (state.roadmapChecks[`${p.id}-${idx}`]) doneCheckpoints++;
    });
  });

  window.GAMSAT_CONTENT.syllabus.forEach((topic) => {
    topic.checklist.forEach((_, idx) => {
      totalCheckpoints++;
      if (state.syllabusChecks[`${topic.id}-${idx}`]) doneCheckpoints++;
    });
  });

  const pct = totalCheckpoints ? Math.round((doneCheckpoints / totalCheckpoints) * 100) : 0;
  document.getElementById("stat-syllabus-pct").textContent = `${pct}%`;
  document.getElementById("bar-syllabus").style.width = `${pct}%`;
  document.getElementById("stat-syllabus-detail").textContent =
    `${doneCheckpoints} / ${totalCheckpoints} checkpoints mastered`;

  // Question accuracy
  const allQuestions = getAllUnits().flatMap((u) => u.questions);
  let attempted = 0;
  let correctCount = 0;
  allQuestions.forEach((q) => {
    if (state.answers[q.id] !== undefined) {
      attempted++;
      if (state.answers[q.id] === q.correct) correctCount++;
    }
  });
  const accPct = attempted ? Math.round((correctCount / attempted) * 100) : 0;
  document.getElementById("stat-q-acc").textContent = attempted ? `${accPct}%` : "--%";
  document.getElementById("bar-q-acc").style.width = `${accPct}%`;
  document.getElementById("stat-q-detail").textContent =
    `${correctCount} / ${attempted} correct (${allQuestions.length} in bank)`;

  // Essays & Error count
  const essayCount = (state.essays || []).length;
  const openErrors = (state.errors || []).filter((e) => e.status !== "Mastered").length;
  document.getElementById("stat-essays-count").textContent = `${essayCount} Essays`;
  document.getElementById("stat-errors-detail").textContent =
    `${openErrors} active items to retry in Error Log`;

  // Roadmap list
  const roadmapEl = document.getElementById("roadmap-container");
  let rmTotal = 0;
  let rmDone = 0;
  roadmapEl.innerHTML = window.GAMSAT_CONTENT.roadmapPhases
    .map((phase) => {
      const itemsHtml = phase.tasks
        .map((task, idx) => {
          const key = `${phase.id}-${idx}`;
          const checked = !!state.roadmapChecks[key];
          rmTotal++;
          if (checked) rmDone++;
          return `
            <label class="check-item ${checked ? "done" : ""}">
              <input type="checkbox" data-rm-key="${key}" ${checked ? "checked" : ""} />
              <span style="font-size:0.88rem;">${task}</span>
            </label>
          `;
        })
        .join("");
      return `
        <div style="margin-bottom:1.1rem; padding-bottom:0.75rem; border-bottom:1px solid var(--border);">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.25rem;">
            <strong style="color:var(--primary);">${phase.title}</strong>
            <span class="badge badge-s1">${phase.weeks}</span>
          </div>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:0.5rem;">${phase.summary}</p>
          ${itemsHtml}
        </div>
      `;
    })
    .join("");

  const rmPct = rmTotal ? Math.round((rmDone / rmTotal) * 100) : 0;
  document.getElementById("roadmap-progress-badge").textContent = `${rmPct}% Done`;

  roadmapEl.querySelectorAll("input[data-rm-key]").forEach((chk) => {
    chk.addEventListener("change", (e) => {
      state.roadmapChecks[e.target.dataset.rmKey] = e.target.checked;
      saveState();
      renderDashboard();
    });
  });
}

// 2. RENDER SYLLABUS & CHEAT SHEETS
function renderSyllabus() {
  const filter = document.getElementById("syllabus-filter").value;
  const container = document.getElementById("syllabus-checklist-view");

  const topics = window.GAMSAT_CONTENT.syllabus.filter(
    (t) => filter === "ALL" || t.section === filter
  );

  container.innerHTML = topics
    .map((topic) => {
      const badgeClass =
        topic.section === "S1"
          ? "badge-s1"
          : topic.section === "S2"
          ? "badge-s2"
          : "badge-s3";
      const checksHtml = topic.checklist
        .map((item, idx) => {
          const key = `${topic.id}-${idx}`;
          const checked = !!state.syllabusChecks[key];
          return `
            <label class="check-item ${checked ? "done" : ""}">
              <input type="checkbox" data-syl-key="${key}" ${checked ? "checked" : ""} />
              <span style="font-size:0.88rem;">${item}</span>
            </label>
          `;
        })
        .join("");

      return `
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; gap:0.5rem; margin-bottom:0.4rem;">
            <span class="badge ${badgeClass}">${topic.category}</span>
            ${topic.highYield ? '<span class="badge badge-high">High Yield</span>' : ""}
          </div>
          <h3 style="font-size:1.05rem; margin-bottom:0.35rem;">${topic.title}</h3>
          <p style="font-size:0.84rem; color:var(--text-muted); margin-bottom:0.75rem;">${topic.summary}</p>
          <div>${checksHtml}</div>
        </div>
      `;
    })
    .join("");

  container.querySelectorAll("input[data-syl-key]").forEach((chk) => {
    chk.addEventListener("change", (e) => {
      state.syllabusChecks[e.target.dataset.sylKey] = e.target.checked;
      saveState();
      renderSyllabus();
      renderDashboard();
    });
  });

  // Render Cheat Sheets
  const csContainer = document.getElementById("syllabus-cheatsheets-view");
  csContainer.innerHTML = window.GAMSAT_CONTENT.cheatSheets
    .map((cs) => {
      const rows = cs.items
        .map(
          (item) => `
          <div style="padding:0.55rem 0; border-bottom:1px solid rgba(148,163,184,0.12);">
            <div style="font-weight:700; font-size:0.86rem; color:var(--primary);">${item.label}</div>
            <div style="font-size:0.88rem; margin-top:0.15rem;">${item.value}</div>
          </div>
        `
        )
        .join("");
      return `
        <div class="card">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.5rem;">
            <span class="badge badge-s3">${cs.section}</span>
            <span class="badge badge-high">${cs.badge}</span>
          </div>
          <h3 style="font-size:1.08rem; margin-bottom:0.6rem;">${cs.title}</h3>
          <div>${rows}</div>
        </div>
      `;
    })
    .join("");
}

// 3. S1 & S3 SIMULATOR
let simSeconds = 0;
let simTimerInterval = null;

function formatTime(totalSeconds) {
  const mins = Math.floor(totalSeconds / 60);
  const secs = Math.floor(totalSeconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function populateSimulatorDropdown() {
  const secFilter = document.getElementById("sim-section-filter").value;
  const select = document.getElementById("sim-unit-select");
  const currentVal = select.value;

  const units = getAllUnits().filter(
    (u) => secFilter === "ALL" || u.section === secFilter
  );

  select.innerHTML = units
    .map((u) => `<option value="${u.id}">[${u.section}] ${u.title}</option>`)
    .join("");

  if (units.some((u) => u.id === currentVal)) {
    select.value = currentVal;
  }
  renderSimulatorUnit();
}

function renderSimulatorUnit() {
  const unitId = document.getElementById("sim-unit-select").value;
  const mode = document.getElementById("sim-mode-select").value;
  const unit = getAllUnits().find((u) => u.id === unitId) || getAllUnits()[0];
  if (!unit) return;

  const badge = document.getElementById("sim-unit-badge");
  badge.textContent = `${unit.section} • ${unit.topic}`;
  badge.className = `badge ${unit.section === "S1" ? "badge-s1" : "badge-s3"}`;

  document.getElementById("sim-unit-title").textContent = unit.title;
  document.getElementById("sim-unit-stimulus").innerHTML = unit.stimulus;

  const isUnitGraded = !!state.gradedUnits[unit.id];
  const qContainer = document.getElementById("sim-questions-container");

  qContainer.innerHTML = unit.questions
    .map((q, idx) => {
      const userAns = state.answers[q.id];
      const struckList = state.strikes[q.id] || [];
      const isFlagged = !!state.flags[q.id];
      const showFeedback = (mode === "tutor" && userAns !== undefined) || isUnitGraded;

      const optionsHtml = q.options
        .map((optText, optIdx) => {
          const isSelected = userAns === optIdx;
          const isStruck = struckList.includes(optIdx);
          let statusClass = "";
          if (showFeedback) {
            if (optIdx === q.correct) statusClass = "correct";
            else if (isSelected && optIdx !== q.correct) statusClass = "wrong";
          } else if (isSelected) {
            statusClass = "selected";
          }

          return `
            <div class="option-row">
              <button class="option-btn ${statusClass} ${isStruck ? "struck" : ""}"
                      data-qid="${q.id}" data-opt="${optIdx}">
                ${optText}
              </button>
              <button class="strike-btn" data-strike-qid="${q.id}" data-strike-opt="${optIdx}" title="Cross out option">
                Strike
              </button>
            </div>
          `;
        })
        .join("");

      const expHtml = showFeedback
        ? `
          <div class="explanation-box">
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.35rem;">
              <strong style="color:${userAns === q.correct ? "var(--success)" : "var(--danger)"};">
                ${userAns === q.correct ? "✓ Correct" : `✗ Incorrect (Correct Answer: ${["A", "B", "C", "D"][q.correct]})`}
              </strong>
              <button class="btn btn-sm" data-log-error-qid="${q.id}" data-unit-title="${unit.title}" data-unit-sec="${unit.section}">
                + Send to Error Log
              </button>
            </div>
            <div>${q.explanation}</div>
          </div>
        `
        : "";

      return `
        <div class="q-block">
          <div class="q-header">
            <span class="badge badge-s3">Question ${idx + 1}</span>
            <button class="btn btn-sm" data-flag-qid="${q.id}" style="${isFlagged ? "border-color:var(--warning); color:var(--warning);" : ""}">
              ${isFlagged ? "🚩 Flagged" : "⚑ Flag"}
            </button>
          </div>
          <div class="q-stem">${q.stem}</div>
          <div>${optionsHtml}</div>
          ${expHtml}
        </div>
      `;
    })
    .join("");

  // Bind option clicks
  qContainer.querySelectorAll(".option-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qid = btn.dataset.qid;
      const opt = Number(btn.dataset.opt);
      state.answers[qid] = opt;
      saveState();
      renderSimulatorUnit();
      renderDashboard();
    });
  });

  // Bind strike clicks
  qContainer.querySelectorAll(".strike-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qid = btn.dataset.strikeQid;
      const opt = Number(btn.dataset.strikeOpt);
      const curr = state.strikes[qid] || [];
      state.strikes[qid] = curr.includes(opt)
        ? curr.filter((x) => x !== opt)
        : [...curr, opt];
      saveState();
      renderSimulatorUnit();
    });
  });

  // Bind flag clicks
  qContainer.querySelectorAll("[data-flag-qid]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qid = btn.dataset.flagQid;
      state.flags[qid] = !state.flags[qid];
      saveState();
      renderSimulatorUnit();
    });
  });

  // Bind 1-click log to error bank
  qContainer.querySelectorAll("[data-log-error-qid]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const qid = btn.dataset.logErrorQid;
      const qObj = unit.questions.find((x) => x.id === qid);
      if (!qObj) return;
      state.errors.unshift({
        id: "err-" + Date.now(),
        date: new Date().toISOString().slice(0, 10),
        source: `${unit.title}`,
        section: unit.section === "S1" ? "S1: Humanities" : "S3: Biology",
        cause: "Fell for ACER Distractor (Extreme / Half-True)",
        what: `${qObj.stem} — ${qObj.explanation}`,
        rule: "Re-read stem constraints and verify axis/units before locking in answer.",
        status: "Needs Retry"
      });
      saveState();
      renderErrors();
      renderDashboard();
      btn.textContent = "✓ Logged to Error Bank";
      btn.disabled = true;
    });
  });
}

// 4. SECTION II ESSAY STUDIO
let s2RemainingSeconds = 32.5 * 60;
let s2TimerInterval = null;

function setEssayTimer(minutes) {
  clearInterval(s2TimerInterval);
  s2TimerInterval = null;
  s2RemainingSeconds = Math.round(minutes * 60);
  document.getElementById("s2-timer-display").textContent = formatTime(s2RemainingSeconds);
}
window.setEssayTimer = setEssayTimer;

function populateS2Prompts() {
  const taskFilter = document.getElementById("s2-task-filter").value;
  const select = document.getElementById("s2-prompt-select");
  const prompts = window.GAMSAT_CONTENT.s2Prompts.filter(
    (p) => taskFilter === "ALL" || p.task === taskFilter
  );

  select.innerHTML = prompts
    .map((p) => `<option value="${p.id}">[${p.task}] ${p.theme}</option>`)
    .join("");

  renderSelectedS2Prompt();
}

function renderSelectedS2Prompt() {
  const promptId = document.getElementById("s2-prompt-select").value;
  const prompt =
    window.GAMSAT_CONTENT.s2Prompts.find((p) => p.id === promptId) ||
    window.GAMSAT_CONTENT.s2Prompts[0];
  if (!prompt) return;

  document.getElementById("s2-task-badge").textContent = prompt.task;
  document.getElementById("s2-theme-title").textContent = prompt.theme;

  document.getElementById("s2-quotes-list").innerHTML = prompt.quotes
    .map((q) => `<div class="quote-card">${q}</div>`)
    .join("");

  document.getElementById("s2-hints-list").innerHTML = prompt.planningHints
    .map((h) => `<li style="margin-bottom:0.35rem;">${h}</li>`)
    .join("");
}

function renderEssayArchive() {
  const archiveEl = document.getElementById("s2-archive-list");
  const essays = state.essays || [];
  document.getElementById("s2-archive-count").textContent = essays.length;

  if (essays.length === 0) {
    archiveEl.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted);">No saved essays yet. Write your response above and click "Save Essay to Portfolio".</p>`;
    return;
  }

  archiveEl.innerHTML = essays
    .map(
      (es) => `
      <div class="card" style="background:var(--bg-elevated); margin-bottom:0.75rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:0.4rem;">
          <div>
            <span class="badge badge-s2">${es.task}</span>
            <strong style="margin-left:0.4rem;">${es.theme}</strong>
          </div>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <span class="badge badge-ok">Score: ${es.score}</span>
            <span style="font-size:0.78rem; color:var(--text-muted);">${es.words} words • ${es.date}</span>
            <button class="btn btn-sm" data-del-essay="${es.id}">Delete</button>
          </div>
        </div>
        ${es.plan ? `<div style="font-size:0.8rem; color:var(--text-muted); margin-bottom:0.4rem;"><strong>Plan:</strong> ${es.plan}</div>` : ""}
        <div style="font-size:0.88rem; white-space:pre-wrap; max-height:160px; overflow-y:auto; padding-top:0.35rem; border-top:1px solid var(--border);">${es.text}</div>
      </div>
    `
    )
    .join("");

  archiveEl.querySelectorAll("[data-del-essay]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.essays = state.essays.filter((e) => e.id !== btn.dataset.delEssay);
      saveState();
      renderEssayArchive();
      renderDashboard();
    });
  });
}

// 5. ERROR LOG & ANALYTICS
function renderErrors() {
  const errors = state.errors || [];
  document.getElementById("err-total-count").textContent = errors.length;

  // Root-Cause Bars
  const causes = {};
  errors.forEach((e) => {
    causes[e.cause] = (causes[e.cause] || 0) + 1;
  });

  const barsEl = document.getElementById("err-analytics-bars");
  const entries = Object.entries(causes).sort((a, b) => b[1] - a[1]);
  if (entries.length === 0) {
    barsEl.innerHTML = `<p style="font-size:0.86rem; color:var(--text-muted);">Log your first missed question on the left (or straight from the S1/S3 Simulator) to see your root-cause analytics.</p>`;
  } else {
    barsEl.innerHTML = entries
      .map(([cause, count]) => {
        const pct = Math.round((count / errors.length) * 100);
        return `
          <div style="margin-bottom:0.75rem;">
            <div style="display:flex; justify-content:space-between; font-size:0.84rem; font-weight:600;">
              <span>${cause}</span>
              <span>${count} (${pct}%)</span>
            </div>
            <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
          </div>
        `;
      })
      .join("");
  }

  // Error Table/Cards
  const statusFilter = document.getElementById("err-status-filter").value;
  const filtered = errors.filter(
    (e) => statusFilter === "ALL" || e.status === statusFilter
  );

  const listEl = document.getElementById("err-list-container");
  if (filtered.length === 0) {
    listEl.innerHTML = `<p style="font-size:0.86rem; color:var(--text-muted);">No matching entries in Error Bank.</p>`;
    return;
  }

  listEl.innerHTML = filtered
    .map(
      (err) => `
      <div class="card" style="background:var(--bg-elevated); margin-bottom:0.75rem;">
        <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:0.5rem; margin-bottom:0.45rem;">
          <div style="display:flex; gap:0.45rem; align-items:center;">
            <span class="badge badge-s3">${err.section}</span>
            <span class="badge badge-high">${err.cause}</span>
            <strong>${err.source}</strong>
          </div>
          <div style="display:flex; gap:0.5rem; align-items:center;">
            <button class="btn btn-sm ${err.status === "Mastered" ? "btn-success" : ""}" data-toggle-err="${err.id}">
              ${err.status === "Mastered" ? "✓ Mastered" : "⏳ Needs Retry (Click when Mastered)"}
            </button>
            <button class="btn btn-sm" data-del-err="${err.id}">✕</button>
          </div>
        </div>
        <div style="font-size:0.88rem; margin-bottom:0.35rem;"><strong>Trap / What happened:</strong> ${err.what}</div>
        <div style="font-size:0.88rem; color:var(--primary);"><strong>Next Time Rule:</strong> ${err.rule}</div>
      </div>
    `
    )
    .join("");

  listEl.querySelectorAll("[data-toggle-err]").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = state.errors.find((e) => e.id === btn.dataset.toggleErr);
      if (target) {
        target.status = target.status === "Mastered" ? "Needs Retry" : "Mastered";
        saveState();
        renderErrors();
        renderDashboard();
      }
    });
  });

  listEl.querySelectorAll("[data-del-err]").forEach((btn) => {
    btn.addEventListener("click", () => {
      state.errors = state.errors.filter((e) => e.id !== btn.dataset.delErr);
      saveState();
      renderErrors();
      renderDashboard();
    });
  });
}

// 6. PDF RUNNER & BUBBLE SHEET
let pdfRemainingSeconds = 150 * 60;
let pdfTimerInterval = null;

function setPdfTimer(mins) {
  clearInterval(pdfTimerInterval);
  pdfTimerInterval = null;
  pdfRemainingSeconds = mins * 60;
  document.getElementById("pdf-timer-display").textContent = formatTime(pdfRemainingSeconds);
}
window.setPdfTimer = setPdfTimer;

function renderPdfBubbleSheet() {
  const count = Math.min(120, Math.max(1, Number(document.getElementById("pdf-q-count").value) || 75));
  const container = document.getElementById("pdf-bubbles-container");
  const ansMap = state.pdfBubbleAnswers || {};
  const graded = state.pdfGradedResults || {};

  let html = "";
  let answeredCount = 0;
  let rightCount = 0;
  const isGraded = Object.keys(graded).length > 0;

  for (let i = 1; i <= count; i++) {
    const picked = ansMap[i];
    if (picked) answeredCount++;
    const g = graded[i];
    if (g && g.isRight) rightCount++;

    const btns = ["A", "B", "C", "D"]
      .map((letter) => {
        let cls = "";
        if (g) {
          if (letter === g.correct) cls = "correct";
          else if (letter === picked && !g.isRight) cls = "wrong";
        } else if (picked === letter) {
          cls = "selected";
        }
        return `<button class="bubble ${cls}" data-qnum="${i}" data-letter="${letter}">${letter}</button>`;
      })
      .join("");

    html += `
      <div class="bubble-row">
        <span style="font-weight:600; font-size:0.86rem;">Q${i}</span>
        <div class="bubble-group">${btns}</div>
      </div>
    `;
  }

  container.innerHTML = html;
  const summaryEl = document.getElementById("pdf-score-summary");
  if (isGraded) {
    const totalKey = Object.keys(graded).length;
    const pct = Math.round((rightCount / totalKey) * 100);
    summaryEl.textContent = `Score: ${rightCount}/${totalKey} (${pct}%)`;
  } else {
    summaryEl.textContent = `Answered: ${answeredCount}/${count}`;
  }

  container.querySelectorAll(".bubble").forEach((b) => {
    b.addEventListener("click", () => {
      const qn = Number(b.dataset.qnum);
      const lt = b.dataset.letter;
      state.pdfBubbleAnswers[qn] = state.pdfBubbleAnswers[qn] === lt ? undefined : lt;
      state.pdfGradedResults = {};
      saveState();
      renderPdfBubbleSheet();
    });
  });
}

// INITIALIZATION & EVENT LISTENERS
function renderAll() {
  applyTheme();
  renderDashboard();
  renderSyllabus();
  populateSimulatorDropdown();
  populateS2Prompts();
  renderEssayArchive();
  renderErrors();
  renderPdfBubbleSheet();
}

document.addEventListener("DOMContentLoaded", () => {
  // Nav tabs
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.addEventListener("click", () => switchTab(btn.dataset.tab));
  });

  // Theme toggle
  document.getElementById("theme-toggle-btn").addEventListener("click", () => {
    state.theme = state.theme === "light" ? "dark" : "light";
    applyTheme();
    saveState();
  });

  // Backup Export & Restore Import
  document.getElementById("export-btn").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(state, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = `gamsat-prep-backup-${new Date().toISOString().slice(0, 10)}.json`;
    a.click();
  });

  document.getElementById("import-file-input").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      try {
        const imported = JSON.parse(ev.target.result);
        state = { ...defaultState, ...imported };
        saveState();
        renderAll();
      } catch (err) {
        alert("Invalid backup JSON file.");
      }
    };
    reader.readAsText(file);
  });

  // Dashboard inputs
  document.getElementById("setting-name").addEventListener("input", (e) => {
    state.studentName = e.target.value;
    saveState();
    renderDashboard();
  });
  document.getElementById("setting-exam-date").addEventListener("change", (e) => {
    state.examDate = e.target.value;
    saveState();
    renderDashboard();
  });
  document.getElementById("setting-target-score").addEventListener("change", (e) => {
    state.targetScore = Number(e.target.value);
    saveState();
    renderDashboard();
  });
  document.getElementById("dashboard-notes").addEventListener("input", (e) => {
    state.notes = e.target.value;
    saveState();
  });

  // Syllabus filter
  document.getElementById("syllabus-filter").addEventListener("change", renderSyllabus);

  // Simulator controls
  document.getElementById("sim-section-filter").addEventListener("change", populateSimulatorDropdown);
  document.getElementById("sim-unit-select").addEventListener("change", renderSimulatorUnit);
  document.getElementById("sim-mode-select").addEventListener("change", renderSimulatorUnit);

  document.getElementById("sim-submit-unit-btn").addEventListener("click", () => {
    const unitId = document.getElementById("sim-unit-select").value;
    state.gradedUnits[unitId] = true;
    saveState();
    renderSimulatorUnit();
  });

  document.getElementById("sim-timer-toggle").addEventListener("click", (e) => {
    if (simTimerInterval) {
      clearInterval(simTimerInterval);
      simTimerInterval = null;
      e.target.textContent = "▶ Resume Timer";
    } else {
      e.target.textContent = "⏸ Pause";
      simTimerInterval = setInterval(() => {
        simSeconds++;
        document.getElementById("sim-timer-display").textContent = formatTime(simSeconds);
      }, 1000);
    }
  });

  document.getElementById("sim-timer-reset").addEventListener("click", () => {
    clearInterval(simTimerInterval);
    simTimerInterval = null;
    simSeconds = 0;
    document.getElementById("sim-timer-display").textContent = "00:00";
    document.getElementById("sim-timer-toggle").textContent = "▶ Start Timer";
  });

  // Section II Essay Studio controls
  document.getElementById("s2-task-filter").addEventListener("change", populateS2Prompts);
  document.getElementById("s2-prompt-select").addEventListener("change", renderSelectedS2Prompt);
  document.getElementById("s2-random-btn").addEventListener("click", () => {
    const select = document.getElementById("s2-prompt-select");
    const opts = Array.from(select.options);
    if (opts.length > 0) {
      const rand = opts[Math.floor(Math.random() * opts.length)];
      select.value = rand.value;
      renderSelectedS2Prompt();
    }
  });

  document.getElementById("s2-timer-start").addEventListener("click", () => {
    if (s2TimerInterval) {
      clearInterval(s2TimerInterval);
      s2TimerInterval = null;
    } else {
      s2TimerInterval = setInterval(() => {
        if (s2RemainingSeconds > 0) {
          s2RemainingSeconds--;
          document.getElementById("s2-timer-display").textContent = formatTime(s2RemainingSeconds);
        } else {
          clearInterval(s2TimerInterval);
          s2TimerInterval = null;
        }
      }, 1000);
    }
  });

  const essayInput = document.getElementById("s2-essay-input");
  essayInput.addEventListener("input", () => {
    const text = essayInput.value.trim();
    const words = text ? text.split(/\s+/).length : 0;
    document.getElementById("s2-word-count").textContent = `${words} words`;
  });

  document.getElementById("s2-clear-btn").addEventListener("click", () => {
    essayInput.value = "";
    document.getElementById("s2-plan-input").value = "";
    document.getElementById("s2-word-count").textContent = "0 words";
  });

  document.getElementById("s2-save-btn").addEventListener("click", () => {
    const text = essayInput.value.trim();
    if (!text) return;
    const words = text.split(/\s+/).length;
    const promptId = document.getElementById("s2-prompt-select").value;
    const prompt = window.GAMSAT_CONTENT.s2Prompts.find((p) => p.id === promptId);
    state.essays.unshift({
      id: "es-" + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      task: prompt ? prompt.task : "Task A",
      theme: prompt ? prompt.theme : "Custom Essay",
      words,
      score: Number(document.getElementById("s2-self-score").value) || 70,
      plan: document.getElementById("s2-plan-input").value.trim(),
      text
    });
    saveState();
    renderEssayArchive();
    renderDashboard();
  });

  // Error Log controls
  document.getElementById("err-add-btn").addEventListener("click", () => {
    const source = document.getElementById("err-source").value.trim();
    const what = document.getElementById("err-what").value.trim();
    const rule = document.getElementById("err-rule").value.trim();
    if (!source && !what) return;

    state.errors.unshift({
      id: "err-" + Date.now(),
      date: new Date().toISOString().slice(0, 10),
      source: source || "Practice Question",
      section: document.getElementById("err-section").value,
      cause: document.getElementById("err-cause").value,
      what: what || "Missed reasoning step",
      rule: rule || "Double-check stem and units before selecting option.",
      status: "Needs Retry"
    });

    document.getElementById("err-source").value = "";
    document.getElementById("err-what").value = "";
    document.getElementById("err-rule").value = "";
    saveState();
    renderErrors();
    renderDashboard();
  });

  document.getElementById("err-status-filter").addEventListener("change", renderErrors);

  // PDF Companion Runner
  document.getElementById("pdf-file-input").addEventListener("change", (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    const frame = document.getElementById("pdf-viewer-frame");
    frame.src = url;
    document.getElementById("pdf-empty-hint").style.display = "none";
    const nameInput = document.getElementById("pdf-paper-name");
    if (!nameInput.value) nameInput.value = file.name.replace(/\.pdf$/i, "");
  });

  document.getElementById("pdf-generate-sheet-btn").addEventListener("click", () => {
    state.pdfBubbleAnswers = {};
    state.pdfGradedResults = {};
    saveState();
    renderPdfBubbleSheet();
  });

  document.getElementById("pdf-timer-toggle").addEventListener("click", () => {
    if (pdfTimerInterval) {
      clearInterval(pdfTimerInterval);
      pdfTimerInterval = null;
    } else {
      pdfTimerInterval = setInterval(() => {
        if (pdfRemainingSeconds > 0) {
          pdfRemainingSeconds--;
          document.getElementById("pdf-timer-display").textContent = formatTime(pdfRemainingSeconds);
        } else {
          clearInterval(pdfTimerInterval);
          pdfTimerInterval = null;
        }
      }, 1000);
    }
  });

  document.getElementById("pdf-grade-btn").addEventListener("click", () => {
    const rawKey = document.getElementById("pdf-answer-key-input").value.toUpperCase();
    const letters = rawKey.match(/[ABCD]/g) || [];
    if (letters.length === 0) return;
    const results = {};
    letters.forEach((correctLetter, idx) => {
      const qNum = idx + 1;
      const userLetter = state.pdfBubbleAnswers[qNum];
      results[qNum] = {
        correct: correctLetter,
        isRight: userLetter === correctLetter
      };
    });
    state.pdfGradedResults = results;
    saveState();
    renderPdfBubbleSheet();
  });

  document.getElementById("pdf-log-wrong-btn").addEventListener("click", () => {
    const graded = state.pdfGradedResults || {};
    const paperName = document.getElementById("pdf-paper-name").value.trim() || "PDF Practice Paper";
    let added = 0;
    Object.entries(graded).forEach(([qNum, res]) => {
      if (!res.isRight) {
        const picked = state.pdfBubbleAnswers[qNum] || "Blank";
        state.errors.unshift({
          id: `err-${Date.now()}-${qNum}`,
          date: new Date().toISOString().slice(0, 10),
          source: `${paperName} Q${qNum}`,
          section: "S3: Biology",
          cause: "Content / Concept Gap",
          what: `Picked ${picked}, Correct Answer was ${res.correct}.`,
          rule: "Review worked solution and record specific reasoning trap.",
          status: "Needs Retry"
        });
        added++;
      }
    });
    if (added > 0) {
      saveState();
      renderErrors();
      renderDashboard();
      switchTab("errors");
    }
  });

  // Custom Unit Importer
  document.getElementById("custom-unit-save-btn").addEventListener("click", () => {
    const section = document.getElementById("custom-unit-section").value;
    const title = document.getElementById("custom-unit-title").value.trim();
    const stimulus = document.getElementById("custom-unit-stimulus").value.trim();
    const stem = document.getElementById("custom-q-stem").value.trim();
    const optA = document.getElementById("custom-opt-a").value.trim();
    const optB = document.getElementById("custom-opt-b").value.trim();
    const optC = document.getElementById("custom-opt-c").value.trim();
    const optD = document.getElementById("custom-opt-d").value.trim();
    const correct = Number(document.getElementById("custom-q-correct").value);
    const exp = document.getElementById("custom-q-exp").value.trim();

    if (!title || !stem) return;

    const newUnit = {
      id: "custom-unit-" + Date.now(),
      section,
      topic: "Custom Imported Passage",
      title,
      stimulus: `<p>${stimulus.replace(/\n/g, "</p><p>")}</p>`,
      questions: [
        {
          id: "custom-q-" + Date.now(),
          stem,
          options: [
            `A. ${optA}`,
            `B. ${optB}`,
            `C. ${optC}`,
            `D. ${optD}`
          ],
          correct,
          explanation: exp || "Custom imported question."
        }
      ]
    };

    state.customUnits = [...(state.customUnits || []), newUnit];
    saveState();
    populateSimulatorDropdown();
    document.getElementById("sim-unit-select").value = newUnit.id;
    renderSimulatorUnit();
    switchTab("simulator");
  });

  renderAll();
  syncFromServer();
});
