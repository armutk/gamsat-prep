// GAMSAT A-to-Z Prep Suite — Starter Curriculum, Cheat Sheets, Section II Prompts & Question Bank

window.GAMSAT_CONTENT = {
  // 1. A-to-Z 12-WEEK ROADMAP
  roadmapPhases: [
    {
      id: "phase-1",
      weeks: "Weeks 1–3",
      title: "Phase 1: Foundations, Mental Math & Diagnostic",
      summary: "Build no-calculator speed, graph literacy, core science intuition, and baseline reading habits before touching timed ACER tests.",
      tasks: [
        "Take an untimed baseline diagnostic (15 S1 Qs, 1 S2 essay, 25 S3 Qs) to identify starting strengths",
        "Master GAMSAT No-Calculator Math: scientific notation, log10 approximations (log 2=0.3, log 3=0.48, log 5=0.7), and fraction-to-percentage shortcuts",
        "Complete Chemistry Foundations: pH/pKa, Henderson-Hasselbalch without a calculator, stoichiometry, and functional groups",
        "Complete Biology Foundations: reading multi-axis graphs, negative/positive controls, Michaelis-Menten & Lineweaver-Burk plots",
        "Complete Physics Foundations: dimensional analysis (unit checking), proportional reasoning, Ohm's law, and fluid pressure",
        "Write 2 untimed Section II essays (1 Task A, 1 Task B) focusing purely on thesis depth and paragraph structure"
      ]
    },
    {
      id: "phase-2",
      weeks: "Weeks 4–7",
      title: "Phase 2: Active Stem Drilling & Error Logging",
      summary: "Transition to ACER-style reasoning stems. Treat every wrong answer as data in your Error Log.",
      tasks: [
        "Practice 30–40 Section I questions per week across poetry, dense philosophy, social science tables, and political cartoons",
        "Practice 50–60 Section III questions per week focusing on unfamiliar graphs, 3-variable nomograms, and organic reaction schemes",
        "Log 100% of incorrect or guessed questions in the Error Log with root cause + concrete 'Next Time Rule'",
        "Write 2 timed 30-minute essays per week (1 Task A, 1 Task B) using the Section II Studio",
        "Build a personal Section II Idea & Evidence Bank (5–6 versatile philosophical/historical/societal lenses)"
      ]
    },
    {
      id: "phase-3",
      weeks: "Weeks 8–10",
      title: "Phase 3: Pacing, Stamina & Official ACER Papers",
      summary: "Shift to strict exam pacing (1.6 min/Q for S1, 2.0 min/Q for S3, 65 min for both S2 essays).",
      tasks: [
        "Complete ACER Practice Questions & Sample Questions under strict timed conditions",
        "Complete ACER Practice Test 1 & Practice Test 2 with full post-mortem in the Error Log",
        "Drill 'triage discipline': flag and skip boggy calculation stems within 45 seconds instead of losing 6 minutes",
        "Run back-to-back 65-minute Section II double-essay sessions (5 min plan + 25 min write per task)"
      ]
    },
    {
      id: "phase-4",
      weeks: "Weeks 11–12",
      title: "Phase 4: Full Dress Rehearsals & Taper",
      summary: "Simulate full exam day stamina (S1 + S2 + S3 in one sitting), review Error Log patterns, and protect sleep/focus.",
      tasks: [
        "Complete ACER Practice Test 3 & Online Practice Test 4 as full-day simulations at your exact sitting time",
        "Re-attempt every 'Needs Retry' item in your Error Log without looking at solutions",
        "Review High-Yield Cheat Sheets (log values, Henderson-Hasselbalch, stereochemistry rules, tone vocabulary)",
        "Final 3 days: light S2 planning drills only, sleep routine alignment, and exam logistics check"
      ]
    }
  ],

  // 2. A-to-Z SYLLABUS CHECKLIST
  syllabus: [
    // Core Math & Reasoning
    {
      id: "math-1",
      section: "S3-Math",
      category: "No-Calculator Math & Graphs",
      title: "Scientific Notation & Order-of-Magnitude Estimation",
      highYield: true,
      summary: "Convert decimals to 10^n instantly; round coefficients to 1–2 sig figs before multiplying/dividing.",
      checklist: [
        "Convert 0.00045 to 4.5 × 10^-4 without hesitation",
        "Multiply/divide powers of 10 and cancel units across fractions",
        "Spot when answer choices are separated by 10x so rough rounding is enough"
      ]
    },
    {
      id: "math-2",
      section: "S3-Math",
      category: "No-Calculator Math & Graphs",
      title: "Logarithms & pH / pKa Mental Math",
      highYield: true,
      summary: "Memorize log10(2)=0.30, log10(3)=0.48, log10(5)=0.70, log10(7)=0.85 and derive any log or [H+] in seconds.",
      checklist: [
        "Use log(a × b) = log(a) + log(b) and log(a/b) = log(a) - log(b)",
        "Calculate pH from [H+] = 3 × 10^-5 M -> pH = 5 - log(3) = 4.52",
        "Convert pH back to [H+] using fractional exponents (e.g., 10^-4.3 = 10^0.7 × 10^-5 = 5 × 10^-5)"
      ]
    },
    {
      id: "math-3",
      section: "S3-Math",
      category: "No-Calculator Math & Graphs",
      title: "Log-Log, Semi-Log & 3-Axis Nomograms / Ternary Plots",
      highYield: true,
      summary: "ACER loves non-linear axes, inverted axes, and multi-parameter nomograms. Read axes before reading the stem.",
      checklist: [
        "Distinguish linear vs semi-log vs log-log slopes",
        "Read ternary (triangular 3-component) phase diagrams accurately",
        "Trace multi-step nomograms by drawing straight guidelines between scales"
      ]
    },

    // Section I
    {
      id: "s1-1",
      section: "S1",
      category: "Section I: Humanities & Social Sciences",
      title: "Poetry, Figurative Language & Tone Shifts",
      highYield: true,
      summary: "Identify speaker attitude, structural turns ('volta'), irony, and metaphor without over-extrapolating.",
      checklist: [
        "Locate the tonal pivot (e.g. 'Yet', 'But', stanza break) in poems",
        "Eliminate extreme or overly literal answer choices",
        "Distinguish wistful, sardonic, ambivalent, didactic, and elegiac tones"
      ]
    },
    {
      id: "s1-2",
      section: "S1",
      category: "Section I: Humanities & Social Sciences",
      title: "Philosophy, Ethics & Dense Argumentation",
      highYield: true,
      summary: "Map premises, counter-arguments, and the author's actual conclusion vs positions they are critiquing.",
      checklist: [
        "Separate 'views cited by the author' from 'the author's own thesis'",
        "Spot necessary vs sufficient assumptions in philosophical stems",
        "Track pronoun references ('this paradox', 'such determinism') back to the preceding sentence"
      ]
    },
    {
      id: "s1-3",
      section: "S1",
      category: "Section I: Humanities & Social Sciences",
      title: "Political Cartoons, Visuals & Proverbs",
      highYield: false,
      summary: "Synthesize visual caricature + caption irony, and match proverbs/aphorisms by underlying logic rather than surface topic.",
      checklist: [
        "Analyze visual size, foreground/background contrast, and ironic labels in cartoons",
        "Abstract proverbs into structural rules (e.g. 'short-term comfort causes long-term vulnerability')"
      ]
    },
    {
      id: "s1-4",
      section: "S1",
      category: "Section I: Humanities & Social Sciences",
      title: "Literary Fiction & Character Subtext",
      highYield: true,
      summary: "Read between the lines of dialogue: what is left unsaid, power dynamics, and narrator reliability.",
      checklist: [
        "Identify unreliable or self-deceiving narrators",
        "Infer character motivation from subtext and pacing rather than explicit statements"
      ]
    },

    // Section II
    {
      id: "s2-1",
      section: "S2",
      category: "Section II: Written Communication",
      title: "Task A: Socio-Political & Cultural Essay Architecture",
      highYield: true,
      summary: "Respond to societal themes (technology, democracy, justice, conformity, progress) with a nuanced dialectical thesis.",
      checklist: [
        "Extract the core tension across the 5 quotes within 2 minutes",
        "Use Thesis -> Antithesis (Limitation) -> Synthesis structure",
        "Ground arguments in concrete historical, sociological, or policy examples"
      ]
    },
    {
      id: "s2-2",
      section: "S2",
      category: "Section II: Written Communication",
      title: "Task B: Personal, Reflective & Human Condition Essays",
      highYield: true,
      summary: "Explore themes of identity, mortality, empathy, memory, and ageing with psychological depth and authenticity.",
      checklist: [
        "Avoid cliches; move from concrete human observation to universal philosophical insight",
        "Balance emotional resonance with analytical precision",
        "Complete full Task A + Task B pair within 65 minutes (500–650 words each)"
      ]
    },

    // Section III Biology
    {
      id: "s3-bio-1",
      section: "S3-Bio",
      category: "Section III: Biology",
      title: "Experimental Design, Controls & Data Interpretation",
      highYield: true,
      summary: "Identify independent/dependent variables, positive vs negative controls, confounders, and error bars.",
      checklist: [
        "Determine what specific hypothesis a control group rules out",
        "Distinguish correlation from causation and read statistical significance / error bars",
        "Follow multi-step signalling or metabolic pathway diagrams (+ feedback vs - feedback)"
      ]
    },
    {
      id: "s3-bio-2",
      section: "S3-Bio",
      category: "Section III: Biology",
      title: "Enzyme Kinetics & Inhibition (Michaelis-Menten & Lineweaver-Burk)",
      highYield: true,
      summary: "Understand Km (inverse affinity) and Vmax across competitive, non-competitive, and uncompetitive inhibition.",
      checklist: [
        "Competitive inhibition: Km increases, Vmax unchanged (lines cross on y-axis in Lineweaver-Burk)",
        "Non-competitive inhibition: Km unchanged, Vmax decreases (lines cross on x-axis in Lineweaver-Burk)",
        "Read cooperativity (sigmoidal curves, Hill coefficient > 1) and allosteric regulators"
      ]
    },
    {
      id: "s3-bio-3",
      section: "S3-Bio",
      category: "Section III: Biology",
      title: "Renal, Cardiovascular & Respiratory Physiology",
      highYield: true,
      summary: "Clearance equations, Starling forces in capillaries, oxygen-haemoglobin dissociation shifts (Bohr effect).",
      checklist: [
        "Calculate renal clearance C = (U × V) / P and compare against GFR (inulin)",
        "Predict O2-Hb curve right-shift (CADET face Right: CO2, Acid/low pH, 2,3-DPG, Exercise, Temp)",
        "Apply Starling hydrostatic vs oncotic pressures across glomerular and systemic capillaries"
      ]
    },
    {
      id: "s3-bio-4",
      section: "S3-Bio",
      category: "Section III: Biology",
      title: "Genetics, Pedigrees, Hardy-Weinberg & Molecular Bio",
      highYield: false,
      summary: "Autosomal vs X-linked inheritance probabilities, p^2 + 2pq + q^2 = 1, PCR/gel electrophoresis logic.",
      checklist: [
        "Rule out inheritance modes rapidly from pedigree charts",
        "Calculate carrier probabilities and Hardy-Weinberg allele frequencies (p + q = 1)"
      ]
    },

    // Section III Chemistry
    {
      id: "s3-chem-1",
      section: "S3-Chem",
      category: "Section III: Chemistry",
      title: "Acids, Bases, Buffers & Titration Curves",
      highYield: true,
      summary: "pH = pKa + log([A-]/[HA]), buffer capacity within ±1 of pKa, polyprotic amino acid isoelectric points (pI).",
      checklist: [
        "Apply Henderson-Hasselbalch mentally when [A-]/[HA] is 10:1, 2:1, 1:1, 1:5",
        "Identify half-equivalence point (pH = pKa) vs equivalence point on titration curves",
        "Calculate net charge of peptides at a given pH relative to side-chain pKa values"
      ]
    },
    {
      id: "s3-chem-2",
      section: "S3-Chem",
      category: "Section III: Chemistry",
      title: "Chemical Equilibria, Kinetics & Thermodynamics",
      highYield: true,
      summary: "Le Chatelier's principle, rate laws from initial-rate tables, ΔG = ΔH - TΔS, and ICE tables.",
      checklist: [
        "Deduce reaction order (0, 1st, 2nd) from concentration vs rate tables or half-life behaviour",
        "Distinguish thermodynamic spontaneity (ΔG < 0) from kinetic speed (activation energy Ea)",
        "Use K vs Q to predict reaction direction and effect of temperature on K"
      ]
    },
    {
      id: "s3-chem-3",
      section: "S3-Chem",
      category: "Section III: Chemistry",
      title: "Organic Chemistry: Stereochemistry (R/S, E/Z) & Mechanisms",
      highYield: true,
      summary: "Count chiral centres, assign Cahn-Ingold-Prelog R/S, follow unknown multi-step reaction flowcharts.",
      checklist: [
        "Spot chiral carbons (4 different groups) and meso compounds (internal plane of symmetry)",
        "Distinguish SN1 (carbocation, racemisation, 3° > 2° > 1°) vs SN2 (backside attack, inversion, 1° > 2°)",
        "Track functional group transformations in novel synthesis schemes given by ACER"
      ]
    },
    {
      id: "s3-chem-4",
      section: "S3-Chem",
      category: "Section III: Chemistry",
      title: "Electrochemistry & Redox (Galvanic vs Electrolytic)",
      highYield: false,
      summary: "AN OX / RED CAT, standard reduction potentials E°cell = E°cathode - E°anode, Faraday's law.",
      checklist: [
        "Identify oxidizing/reducing agents and calculate oxidation states rapidly",
        "Compute E°cell and recognize that E° > 0 means spontaneous galvanic cell"
      ]
    },

    // Section III Physics
    {
      id: "s3-phys-1",
      section: "S3-Phys",
      category: "Section III: Physics",
      title: "Fluids, Buoyancy & Hemodynamics (Bernoulli & Poiseuille)",
      highYield: true,
      summary: "Continuity (A1v1 = A2v2), Poiseuille flow resistance (R ∝ 1/r^4), Archimedes buoyancy, hydrostatic pressure.",
      checklist: [
        "Recognize that halving vessel radius increases resistance 16-fold (r^4 dependence)",
        "Apply continuity equation and Bernoulli's principle (faster flow -> lower lateral pressure)",
        "Solve buoyancy problems using fraction submerged = density_object / density_fluid"
      ]
    },
    {
      id: "s3-phys-2",
      section: "S3-Phys",
      category: "Section III: Physics",
      title: "Mechanics, Forces, Torque & Energy Conservation",
      highYield: true,
      summary: "Translational and rotational equilibrium (biomechanical levers in joints/muscles), work-energy theorem.",
      checklist: [
        "Solve anatomical lever/torque problems (biceps/forearm pivot: Στ = F × d = 0)",
        "Convert between kinetic energy (1/2 mv^2), gravitational PE (mgh), and power (W/t)"
      ]
    },
    {
      id: "s3-phys-3",
      section: "S3-Phys",
      category: "Section III: Physics",
      title: "Electricity, Circuits & Membrane Capacitance",
      highYield: false,
      summary: "V = IR, P = IV = I^2R = V^2/R, series vs parallel resistors and capacitors (axon lipid bilayer models).",
      checklist: [
        "Reduce series/parallel resistor networks and voltage dividers",
        "Remember capacitor rules are opposite to resistors (C_parallel = C1 + C2)"
      ]
    },
    {
      id: "s3-phys-4",
      section: "S3-Phys",
      category: "Section III: Physics",
      title: "Nuclear Decay, Half-Life & Optics/Waves",
      highYield: false,
      summary: "Alpha/beta/gamma decay balances, N(t) = N0(1/2)^(t/t_half), Snell's law and lens magnification.",
      checklist: [
        "Calculate remaining isotope fraction after fractional or integer half-lives",
        "Balance mass number (A) and atomic number (Z) in radioactive decay chains"
      ]
    }
  ],

  // 3. HIGH-YIELD CHEAT SHEETS
  cheatSheets: [
    {
      id: "cs-logs",
      section: "Mental Math",
      title: "No-Calculator Logarithm & pH Shortcuts",
      badge: "Must Memorize",
      items: [
        { label: "Core Log10 Values", value: "log(1)=0 | log(2)≈0.30 | log(3)≈0.48 | log(4)≈0.60 | log(5)≈0.70 | log(6)≈0.78 | log(7)≈0.85 | log(8)≈0.90 | log(9)≈0.95" },
        { label: "Quick pH from [H+]", value: "If [H+] = a × 10^-n M, then pH = n - log10(a). Example: [H+] = 4 × 10^-6 M → pH = 6 - 0.60 = 5.40." },
        { label: "[H+] from pH", value: "If pH = 7.70 → rewrite as 8 - 0.30 → since log(2)=0.30, [H+] = 2 × 10^-8 M." },
        { label: "Henderson-Hasselbalch", value: "pH = pKa + log([Base]/[Acid]). Ratio 10:1 → +1 pH unit. Ratio 2:1 → +0.3 pH unit. Ratio 1:3 → -0.48 pH unit." }
      ]
    },
    {
      id: "cs-kinetics",
      section: "Biology & Biochem",
      title: "Enzyme Kinetics & Inhibition Quick Matrix",
      badge: "High Yield S3",
      items: [
        { label: "Michaelis Constant (Km)", value: "[S] at 1/2 Vmax. Lower Km = HIGHER binding affinity. Independent of enzyme concentration [E]." },
        { label: "Competitive Inhibitor", value: "Binds active site. Km INCREASES (apparent affinity drops), Vmax UNCHANGED. Overcome by high [S]." },
        { label: "Non-Competitive Inhibitor", value: "Binds allosteric site equally on E and ES. Km UNCHANGED, Vmax DECREASES." },
        { label: "Uncompetitive Inhibitor", value: "Binds ES complex only. Both Km and Vmax DECREASE by the same factor (parallel lines on Lineweaver-Burk)." },
        { label: "Lineweaver-Burk Axes", value: "y-axis = 1/V (intercept = 1/Vmax). x-axis = 1/[S] (intercept = -1/Km). Slope = Km/Vmax." }
      ]
    },
    {
      id: "cs-physio",
      section: "Biology & Physiology",
      title: "Renal Clearance, Starling Forces & O2 Dissociation",
      badge: "High Yield S3",
      items: [
        { label: "Renal Clearance (Cx)", value: "Cx = (Ux × V) / Px. If Cx < GFR (inulin): net reabsorption. If Cx > GFR: net tubular secretion." },
        { label: "Starling Net Filtration", value: "NFP = (Pc - Pif) - (πc - πif). Capillary hydrostatic (Pc) pushes fluid OUT; plasma oncotic (πc) pulls fluid IN." },
        { label: "Bohr Shift (O2-Hb Curve)", value: "Right shift = lower O2 affinity = easier unloading to tissues (High CO2, Low pH, High Temp, High 2,3-BPG). P50 increases." }
      ]
    },
    {
      id: "cs-org",
      section: "Chemistry",
      title: "Organic Stereochemistry & Reaction Patterns",
      badge: "High Yield S3",
      items: [
        { label: "Chiral Centre Rule", value: "sp3 atom bonded to 4 DIFFERENT groups. Max stereoisomers = 2^n (minus meso compounds with internal symmetry)." },
        { label: "Cahn-Ingold-Prelog (R/S)", value: "Rank 1–4 by atomic number. With lowest priority (4) on a DASH: clockwise = R, counter-clockwise = S. If (4) is on a WEDGE, flip result!" },
        { label: "SN1 vs SN2", value: "SN1: 2 steps, planar carbocation intermediate, racemic mixture (R+S), favoured by 3° substrate & polar protic solvent. SN2: 1 concerted step, backside attack, stereochemical inversion, favoured by 1°/2° & polar aprotic solvent." },
        { label: "Oxidation Ladder", value: "1° Alcohol → Aldehyde (PCC) → Carboxylic Acid (CrO3/KMnO4). 2° Alcohol → Ketone. 3° Alcohol → No oxidation." }
      ]
    },
    {
      id: "cs-physics",
      section: "Physics",
      title: "Hemodynamics, Levers & Proportionality Traps",
      badge: "High Yield S3",
      items: [
        { label: "Poiseuille's Law", value: "Q = (ΔP π r^4) / (8 η L). Flow rate Q scales with r^4! If radius doubles, flow increases 16× (at constant ΔP)." },
        { label: "Continuity vs Parallel Vessels", value: "A1v1 = A2v2 applies to TOTAL cross-sectional area. Individual capillaries are narrow, but total capillary bed area is huge → flow velocity is slowest in capillaries." },
        { label: "Anatomical Torque", value: "τ = F × r × sin(θ). Because muscles insert close to joints (small r_muscle vs large r_load), F_muscle is much larger than the weight held in the hand." },
        { label: "Radioactive Half-Life", value: "After n half-lives, remaining fraction = (1/2)^n. 3 half-lives = 1/8 (12.5%). 4 half-lives = 1/16 (6.25%)." }
      ]
    },
    {
      id: "cs-s1",
      section: "Section I",
      title: "ACER Section I Distractor Traps & Tone Vocabulary",
      badge: "High Yield S1",
      items: [
        { label: "The 'True But Irrelevant' Trap", value: "Statement is factually true or appears in the text, but does not answer the specific question stem." },
        { label: "The 'Too Extreme' Trap", value: "Watch out for absolutes ('entirely', 'never', 'proves', 'inevitably') when the passage is nuanced or tentative." },
        { label: "The 'Half-Right, Half-Wrong' Trap", value: "First clause matches the passage perfectly, but the second clause smuggles in an unsupported value judgement." },
        { label: "High-Frequency Tone Words", value: "Sardonic (mocking/cynical), Elegiac (mournful/wistful for the past), Didactic (instructing/moralizing), Ambivalent (pulled in two opposing directions), Equivocal (deliberately ambiguous), Reverent (deeply respectful)." }
      ]
    }
  ],

  // 4. SECTION II QUOTE BANK (Task A & Task B)
  s2Prompts: [
    {
      id: "s2-a-1",
      task: "Task A",
      theme: "Technology, Surveillance & Human Autonomy",
      quotes: [
        "\"We shape our tools, and thereafter our tools shape us.\" — John Culkin",
        "\"Convenience is the anesthesia of the modern citizen; we trade liberty not out of fear, but to save three clicks.\" — Anonymous",
        "\"Technological progress has merely provided us with more efficient means for going backwards.\" — Aldous Huxley",
        "\"Every algorithm that predicts your desire subtly narrows who you might become tomorrow.\" — Shoshana Zuboff (adapted)",
        "\"To blame the machine for human alienation is to blame the mirror for the expression on our face.\" — Anonymous"
      ],
      planningHints: [
        "Thesis angle: Technology is not neutral infrastructure; predictive efficiency subtly restructures human agency by turning choices into defaults.",
        "Antithesis / Nuance: Yet technology also democratizes knowledge and liberates humans from material drudgery—the danger lies in commercial incentives (attention economy), not tools themselves.",
        "Synthesis: Preserving autonomy requires 'friction by design'—civic literacy and regulation that keep tools subordinate to human deliberation."
      ]
    },
    {
      id: "s2-a-2",
      task: "Task A",
      theme: "Truth, Expertise & Public Discourse",
      quotes: [
        "\"Falsehood flies, and the Truth comes limping after it.\" — Jonathan Swift",
        "\"In an age of universal access to information, ignorance is no longer a lack of data, but an act of identity protection.\" — Anonymous",
        "\"The death of expertise is not the rejection of knowledge, but the collapse of trust in the institutions that claim to guard it.\" — Tom Nichols (adapted)",
        "\"Skepticism is the chastity of the intellect, and it is shameful to surrender it too soon.\" — George Santayana",
        "\"When everyone owns their own facts, we lose the common ground required to disagree productively.\" — Hannah Arendt (adapted)"
      ],
      planningHints: [
        "Thesis angle: Modern epistemic polarization stems less from informational scarcity than from tribal belonging and institutional estrangement.",
        "Antithesis / Nuance: Healthy democracies require skepticism toward technocratic elites who have historically conflated value judgments with 'objective science'.",
        "Synthesis: Rebuilding shared truth demands epistemic humility from experts and civic spaces that separate identity from empirical inquiry."
      ]
    },
    {
      id: "s2-a-3",
      task: "Task A",
      theme: "Justice, Punishment & Rehabilitation",
      quotes: [
        "\"The degree of civilization in a society can be judged by entering its prisons.\" — Fyodor Dostoevsky",
        "\"Retribution satisfies an ancient instinct for balance, yet rarely repairs what was broken.\" — Anonymous",
        "\"A society that prepares the crime has no right to wash its hands in the punishment of the criminal.\" — Henry Thomas Buckle (adapted)",
        "\"Mercy to the guilty can become cruelty to the innocent.\" — Adam Smith",
        "\"Justice without structural reform is merely the tidy administration of inequality.\" — Anonymous"
      ],
      planningHints: [
        "Thesis angle: A purely retributive justice system mistakes moral catharsis for social repair, treating symptoms while ignoring structural criminogenic roots.",
        "Antithesis / Nuance: However, moral accountability and protection of the vulnerable require clear boundaries and consequences for harm.",
        "Synthesis: Mature justice integrates accountability with restorative rehabilitation and upstream socioeconomic prevention."
      ]
    },
    {
      id: "s2-a-4",
      task: "Task A",
      theme: "Meritocracy, Success & Structural Inequality",
      quotes: [
        "\"The myth of meritocracy flatters the winners into believing they earned their luck, and shames the losers into believing they deserve their fate.\" — Michael Sandel (adapted)",
        "\"Equality of opportunity is an empty promise when the starting line is drawn miles apart.\" — Anonymous",
        "\"Without reward for excellence and effort, society stagnates in mediocrity.\" — Anonymous",
        "\"We measure human worth by market utility, forgetting that the most vital work is often the least remunerated.\" — Anonymous",
        "\"Privilege is invisible to those who have it.\" — Michael Kimmel"
      ],
      planningHints: [
        "Thesis angle: While meritocracy began as an emancipatory alternative to hereditary aristocracy, unvarnished meritocracy hardens inequality by moralizing socioeconomic advantage.",
        "Antithesis / Nuance: Effort, competence, and specialized skill remain essential—especially in high-stakes fields like medicine and engineering.",
        "Synthesis: Separate the cultivation of competence from the moralization of human dignity; pair high standards with robust social floors."
      ]
    },
    {
      id: "s2-b-1",
      task: "Task B",
      theme: "Vulnerability, Suffering & Human Connection",
      quotes: [
        "\"The wound is the place where the Light enters you.\" — Rumi",
        "\"We admire people for their strengths, but we love them for their vulnerabilities.\" — Anonymous",
        "\"Modern culture treats sadness as a malfunction to be optimized away rather than a signal to be understood.\" — Anonymous",
        "\"Nothing human is alien to me.\" — Terence",
        "\"To armour oneself against grief is to wall oneself off from intimacy.\" — C.S. Lewis (adapted)"
      ],
      planningHints: [
        "Thesis angle: In a culture obsessed with curated invulnerability and self-sufficiency, shared vulnerability remains the true foundation of empathy and psychological maturity.",
        "Nuance / Depth: Suffering should not be romanticized—chronic trauma can isolate rather than enlighten—unless met with relational safety and meaning-making.",
        "Resolution: Authentic resilience is not stoic detachment, but the courage to remain porous to others despite the risk of loss."
      ]
    },
    {
      id: "s2-b-2",
      task: "Task B",
      theme: "Memory, Nostalgia & Personal Identity",
      quotes: [
        "\"Memory is the scribe of the soul, yet it edits every page to suit the present reader.\" — Aristotle (adapted)",
        "\"Nostalgia is a file that removes the rough edges from the good old days.\" — Doug Larson",
        "\"We are who we are only because of what we choose to remember—and what we mercy ourselves to forget.\" — Anonymous",
        "\"The past is never dead. It's not even past.\" — William Faulkner",
        "\"To live entirely in memory is to embalm the present.\" — Anonymous"
      ],
      planningHints: [
        "Thesis angle: Memory is not a passive archive of facts, but an active, reconstructive narrative through which we maintain continuity of self.",
        "Nuance / Depth: Unexamined nostalgia distorts the past into a refuge from present responsibility, while inability to let go traps us in grievance.",
        "Resolution: Wisdom lies in holding our past as a compass rather than an anchor—honouring where we have been while remaining open to revision."
      ]
    },
    {
      id: "s2-b-3",
      task: "Task B",
      theme: "Solitude, Belonging & Modern Loneliness",
      quotes: [
        "\"Language has created the word 'loneliness' to express the pain of being alone. And it has created the word 'solitude' to express the glory of being alone.\" — Paul Tillich",
        "\"One can be most lonely in the middle of a crowd that demands a mask.\" — Anonymous",
        "\"We are hyper-connected yet starved of presence.\" — Sherry Turkle (adapted)",
        "\"If you are lonely when you're alone, you are in bad company.\" — Jean-Paul Sartre",
        "\"Belonging begins the moment we stop auditioning for acceptance.\" — Brené Brown (adapted)"
      ],
      planningHints: [
        "Thesis angle: Loneliness is not the physical absence of others, but the psychological gap between the self we present and the self we feel known as.",
        "Nuance / Depth: Conversely, the capacity for solitude is a prerequisite for authentic connection—without an inner life, relationships become mere distraction from ourselves.",
        "Resolution: True belonging and restorative solitude are complementary, not opposites; each makes the other possible."
      ]
    },
    {
      id: "s2-b-4",
      task: "Task B",
      theme: "Time, Mortality & the Search for Meaning",
      quotes: [
        "\"It is not that we have a short time to live, but that we waste a lot of it.\" — Seneca",
        "\"Without the boundary of mortality, every choice would lose its weight and urgency.\" — Anonymous",
        "\"We spend the first half of our lives wishing for tomorrow, and the second half mourning yesterday.\" — Anonymous",
        "\"Busyness is the modern antidote to existential dread.\" — Anonymous",
        "\"To count our days is to learn how to make our days count.\" — Psalm 90 (adapted)"
      ],
      planningHints: [
        "Thesis angle: Finitude is not the enemy of meaning, but its precondition—scarcity of time gives moral gravity to our commitments and attention.",
        "Nuance / Depth: Yet acute awareness of mortality often triggers frantic productivity ('legacy obsession') rather than genuine presence.",
        "Resolution: Living well requires shifting from quantitative accumulation of years/achievements to qualitative depth of attention in the present."
      ]
    }
  ],

  // 5. PRE-LOADED EXAM SIMULATOR UNITS (Section I & Section III)
  units: [
    // UNIT 1: Section I — Philosophy & Epistemology
    {
      id: "unit-s1-1",
      section: "S1",
      topic: "Philosophy & Social Critique",
      title: "Unit 1 (Questions 1–4): The Tyranny of Measurability",
      stimulus: `
        <p>In contemporary institutional life, what cannot be counted rarely counts. Originally conceived as a democratic check against arbitrary patronage—replacing the whim of the aristocrat with the impartiality of the ledger—quantification has mutated from an instrument of accountability into a substitute for judgement itself. Historian Theodore Porter observed that reliance on numbers is most acute not where expertise is strongest, but where public trust is weakest; numbers offer the appearance of mechanical objectivity precisely when institutions fear defending value-laden decisions in the open.</p>
        <p>Yet a metric is never the phenomenon it purports to capture; it is a low-resolution proxy. When a hospital is judged solely by four-hour emergency waiting targets, patients are held in ambulance bays until the clock can be safely started. When universities are ranked by citation volume, incremental salami-slicing of research displaces risky, slow-maturing inquiry. Economist Charles Goodhart diagnosed this pathology succinctly: <em>"When a measure becomes a target, it ceases to be a good measure."</em></p>
        <p>The deeper tragedy of metric fixation, however, is not merely the gaming of targets, but the quiet atrophy of professional phronesis—Aristotle’s term for practical wisdom born of lived experience and ethical sensitivity to context. Unlike an algorithm, the seasoned clinician or teacher knows when a rule must be bent to serve its underlying purpose. By demanding that every act justify itself in the currency of key performance indicators, managerialism does not eliminate discretion; it merely drives discretion underground, stripping practitioners of the moral vocabulary needed to explain why the unmeasurable often matters most.</p>
      `,
      questions: [
        {
          id: "q-s1-1",
          stem: "According to the passage, the initial historical appeal of quantification in public life lay in its capacity to:",
          options: [
            "A. accelerate the efficiency of bureaucratic decision-making.",
            "B. constrain personal bias and nepotism through standardised criteria.",
            "C. replicate the empirical rigour of the natural sciences within governance.",
            "D. eliminate the need for specialised professional training."
          ],
          correct: 1,
          explanation: "Paragraph 1 explicitly states that quantification was 'Originally conceived as a democratic check against arbitrary patronage—replacing the whim of the aristocrat with the impartiality of the ledger.' Option B directly captures constraining personal bias/patronage. Options A, C, and D introduce ideas not cited as its original appeal."
        },
        {
          id: "q-s1-2",
          stem: "Theodore Porter’s observation in the first paragraph implies that institutions lean most heavily on numerical metrics when they:",
          options: [
            "A. possess unimpeachable technical mastery over their domain.",
            "B. lack the confidence or legitimacy to justify subjective judgements publicly.",
            "C. seek to empower frontline workers against central management.",
            "D. have already eliminated systemic corruption."
          ],
          correct: 1,
          explanation: "Porter notes that reliance on numbers is 'most acute not where expertise is strongest, but where public trust is weakest; numbers offer the appearance of mechanical objectivity precisely when institutions fear defending value-laden decisions in the open.' This matches B."
        },
        {
          id: "q-s1-3",
          stem: "The hospital and university examples in the second paragraph primarily serve to illustrate:",
          options: [
            "A. the inevitable incompetence of public-sector administrators.",
            "B. how agents optimize the proxy indicator at the expense of the underlying goal.",
            "C. why quantitative metrics are wholly useless in healthcare and higher education.",
            "D. that financial incentives are more powerful than reputational incentives."
          ],
                    correct: 1,
          explanation: "Both examples show institutions manipulating the proxy metric (holding patients in ambulances to meet the 4-hour clock; splitting papers to inflate citations) while undermining the actual goal (patient care, breakthrough inquiry)—directly illustrating Goodhart's Law (Option B). Option C is an 'extreme trap' ('wholly useless')."
        },
        {
          id: "q-s1-4",
          stem: "In the final sentence, the author suggests that under 'managerialism', professional discretion is:",
          options: [
            "A. eradicated completely by automated rules.",
            "B. preserved openly as the highest institutional virtue.",
            "C. still exercised covertly, but deprived of legitimate public articulation.",
            "D. transferred from senior administrators to junior practitioners."
          ],
          correct: 2,
          explanation: "The final sentence states: 'managerialism does not eliminate discretion; it merely drives discretion underground, stripping practitioners of the moral vocabulary needed to explain why the unmeasurable often matters most.' This directly corresponds to C."
        }
      ]
    },

    // UNIT 2: Section I — Poetry & Literary Analysis
    {
      id: "unit-s1-2",
      section: "S1",
      topic: "Poetry & Tone Analysis",
      title: "Unit 2 (Questions 5–7): 'Cartography of the Suburb'",
      stimulus: `
        <div class="poem-box">
          <p><strong>Cartography of the Suburb</strong></p>
          <p>The surveyor came with brass and tripod,<br>
          pinned the creek-bed underneath a cul-de-sac,<br>
          taught the unruly clay to kneel in rectangles<br>
          and named each street for trees he’d felled to pave it.</p>
          <p>Now every lawn is shorn to regulation Tuesday;<br>
          sprinklers tick like metronomes at dusk.<br>
          Behind Venetian blinds, we polish heirloom compasses<br>
          that point insistently toward nowhere we are allowed to go.</p>
          <p>Only in November, when the storm-drains choke,<br>
          does the buried water remember its old grammar—<br>
          lifting the asphalt skin an inch, speaking in silt<br>
          across the driveways of the newly settled.</p>
        </div>
      `,
      questions: [
        {
          id: "q-s1-5",
          stem: "The irony in line 4 ('and named each street for trees he’d felled to pave it') primarily highlights:",
          options: [
            "A. the surveyor's deep botanical appreciation for native flora.",
            "B. the sentimental memorialisation of nature by the very act that destroys it.",
            "C. the legal requirement to preserve indigenous place names.",
            "D. the futility of building roads in heavily forested valleys."
          ],
          correct: 1,
          explanation: "Naming streets after the very trees cut down to build those streets is a classic ironic contrast: commemorating nature symbolically while erasing it materially (Option B)."
        },
        {
          id: "q-s1-6",
          stem: "In the second stanza, the image of polishing 'heirloom compasses / that point insistently toward nowhere we are allowed to go' suggests that the residents:",
          options: [
            "A. are preparing for an imminent physical migration out of the suburb.",
            "B. harbour a vestigial longing for adventure that is domesticated and constrained by suburban conformity.",
            "C. take pride in collecting antique maritime instruments.",
            "D. are baffled by the confusing street layout created by the surveyor."
          ],
          correct: 1,
          explanation: "Juxtaposed with 'lawn shorn to regulation Tuesday' and 'Venetian blinds', the compasses symbolize an inherited human impulse toward exploration/wildness ('point insistently') that remains trapped inside domestic routine ('behind Venetian blinds... nowhere we are allowed to go')."
        },
        {
          id: "q-s1-7",
          stem: "What does the phrase 'remember its old grammar' (line 10) imply about the natural landscape?",
          options: [
            "A. Its original patterns of flow persist beneath artificial human order and periodically reassert themselves.",
            "B. The creek-bed has been permanently silenced by civil engineering.",
            "C. Floods are unprecedented natural disasters caused by climate change.",
            "D. Human language originated from imitating the sounds of water."
          ],
          correct: 0,
          explanation: "In stanza 1 the creek-bed was 'pinned underneath a cul-de-sac'; in stanza 3, heavy rain causes the 'buried water' to 'remember its old grammar—lifting the asphalt skin', showing that nature's underlying order endures beneath suburban paving and resurfaces (Option A)."
        }
      ]
    },

    // UNIT 3: Section III — Renal Physiology & Clearance Graphs
    {
      id: "unit-s3-1",
      section: "S3",
      topic: "Biology: Renal Physiology",
      title: "Unit 3 (Questions 8–11): Renal Clearance & Tubular Transport",
      stimulus: `
        <p>The renal clearance ($C_x$) of a solute $X$ is defined as the volume of plasma completely cleared of that substance by the kidneys per unit time:</p>
        <p class="formula-box">$$C_x = \\frac{U_x \\times V}{P_x}$$</p>
        <p>where $U_x$ is the urine concentration of $X$ (mg/mL), $V$ is the urine flow rate (mL/min), and $P_x$ is the plasma concentration of $X$ (mg/mL). Inulin, a fructose polymer, is freely filtered at the glomerulus and is neither reabsorbed nor secreted by the renal tubules; thus, $C_{\\text{inulin}}$ equals the glomerular filtration rate (GFR).</p>
        <p>Figure 1 shows the filtration, excretion, and tubular transport rates of three solutes—<strong>Inulin</strong>, <strong>Substance M</strong>, and <strong>Substance N</strong>—as a function of their plasma concentration ($P_x$) in a healthy adult with a constant GFR of $125\\text{ mL/min}$ and urine flow rate $V = 2.0\\text{ mL/min}$.</p>
        <div class="svg-diagram">
          <svg viewBox="0 0 520 230" width="100%" height="230">
            <rect width="520" height="230" fill="#0f172a" rx="8"/>
            <!-- Axes -->
            <line x1="60" y1="190" x2="480" y2="190" stroke="#94a3b8" stroke-width="2"/>
            <line x1="60" y1="25" x2="60" y2="190" stroke="#94a3b8" stroke-width="2"/>
            <text x="270" y="218" fill="#cbd5e1" font-size="12" text-anchor="middle">Plasma Concentration Px (mg/mL)</text>
            <text x="18" y="110" fill="#cbd5e1" font-size="12" text-anchor="middle" transform="rotate(-90 18 110)">Excretion Rate Ux·V (mg/min)</text>
            <!-- Grid & ticks -->
            <text x="60" y="205" fill="#94a3b8" font-size="11" text-anchor="middle">0</text>
            <text x="180" y="205" fill="#94a3b8" font-size="11" text-anchor="middle">1.0</text>
            <text x="300" y="205" fill="#94a3b8" font-size="11" text-anchor="middle">2.0</text>
            <text x="420" y="205" fill="#94a3b8" font-size="11" text-anchor="middle">3.0</text>
            <line x1="180" y1="25" x2="180" y2="190" stroke="#1e293b" stroke-dasharray="4"/>
            <line x1="300" y1="25" x2="300" y2="190" stroke="#1e293b" stroke-dasharray="4"/>
            <line x1="420" y1="25" x2="420" y2="190" stroke="#1e293b" stroke-dasharray="4"/>
            <!-- Curves -->
            <!-- Substance N (secreted: higher than inulin initially, carrier saturates) -->
            <path d="M 60 190 Q 150 75 220 65 L 460 22" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
            <text x="370" y="28" fill="#38bdf8" font-size="12" font-weight="bold">Substance N</text>
            <!-- Inulin (linear through origin, slope = GFR) -->
            <line x1="60" y1="190" x2="460" y2="50" stroke="#facc15" stroke-width="2.5" stroke-dasharray="6,3"/>
            <text x="415" y="80" fill="#facc15" font-size="12" font-weight="bold">Inulin (Filtered load)</text>
            <!-- Substance M (reabsorbed until threshold Px = 2.0, then parallel to inulin) -->
            <polyline points="60,190 300,190 460,134" fill="none" stroke="#f43f5e" stroke-width="2.5"/>
            <text x="395" y="162" fill="#f43f5e" font-size="12" font-weight="bold">Substance M</text>
          </svg>
        </div>
      `,
      questions: [
        {
          id: "q-s3-1",
          stem: "Based on Figure 1, which of the following correctly describes the renal handling of Substance M and Substance N (assuming both are freely filtered)?",
          options: [
            "A. Substance M undergoes net tubular secretion; Substance N undergoes net tubular reabsorption.",
            "B. Substance M undergoes saturable tubular reabsorption; Substance N undergoes saturable tubular secretion.",
            "C. Both Substance M and Substance N are reabsorbed via passive diffusion.",
            "D. Substance M is excluded from glomerular filtration below Px = 2.0 mg/mL."
          ],
          correct: 1,
          explanation: "Excretion rate (Ux·V) for Inulin represents the filtered load (GFR × Px). Substance M has zero excretion until Px = 2.0 mg/mL (renal threshold) and then rises parallel to Inulin—classic carrier-mediated saturable reabsorption (like glucose). Substance N has an excretion rate ABOVE filtered load that bends to become parallel to Inulin at high Px—classic saturable tubular secretion (like PAH)."
        },
        {
          id: "q-s3-2",
          stem: "Given that GFR = 125 mL/min, what is the maximum tubular transport capacity ($T_m$) for the reabsorption of Substance M?",
          options: [
            "A. 62.5 mg/min",
            "B. 125 mg/min",
            "C. 250 mg/min",
            "D. 375 mg/min"
          ],
          correct: 2,
          explanation: "From Figure 1, Substance M begins appearing in urine at the threshold plasma concentration Px = 2.0 mg/mL, where reabsorption carriers reach saturation (Tm). Filtered load at saturation = GFR × Px = 125 mL/min × 2.0 mg/mL = 250 mg/min."
        },
        {
          id: "q-s3-3",
          stem: "At a plasma concentration of $P_x = 3.0\\text{ mg/mL}$ for Substance M, and given urine flow rate $V = 2.0\\text{ mL/min}$, what is the approximate concentration of Substance M in the urine ($U_M$)?",
          options: [
            "A. 62.5 mg/mL",
            "B. 125 mg/mL",
            "C. 187.5 mg/mL",
            "D. 375 mg/mL"
          ],
          correct: 0,
          explanation: "Step 1: At Px = 3.0 mg/mL, Filtered Load = GFR × Px = 125 × 3.0 = 375 mg/min. Step 2: Reabsorption is saturated at Tm = 250 mg/min. Step 3: Excretion rate (UM × V) = Filtered Load - Reabsorbed = 375 - 250 = 125 mg/min. Step 4: Since V = 2.0 mL/min, UM = 125 / 2.0 = 62.5 mg/mL."
        },
        {
          id: "q-s3-4",
          stem: "As the plasma concentration $P_x$ of Substance N increases from $1.0\\text{ mg/mL}$ to $10.0\\text{ mg/mL}$ (well above carrier saturation), the renal clearance $C_N$ will:",
          options: [
            "A. increase linearly without bound.",
            "B. remain constant at a value above 125 mL/min.",
            "C. decrease asymptotically toward 125 mL/min.",
            "D. decrease asymptotically toward 0 mL/min."
          ],
          correct: 2,
          explanation: "Clearance CN = Excretion / Px = (GFR·Px + Tm_secretion) / Px = GFR + (Tm_secretion / Px). At low Px, CN is much greater than GFR. As Px becomes very large, the constant secreted amount (Tm) becomes negligible relative to the huge filtered load, so CN decreases toward GFR (125 mL/min)."
        }
      ]
    },

    // UNIT 4: Section III — Chemistry: Weak Acids, Buffers & Mental Log Math
    {
      id: "unit-s3-2",
      section: "S3",
      topic: "Chemistry: Buffers & pKa",
      title: "Unit 4 (Questions 12–15): Weak Acid Buffer & Henderson-Hasselbalch",
      stimulus: `
        <p>Lactic acid ($\\text{CH}_3\\text{CH(OH)COOH}$, abbreviated $\\text{HLac}$) is a monoprotic weak organic acid produced during anaerobic glycolysis:</p>
        <p class="formula-box">$$\\text{HLac (aq)} \\rightleftharpoons \\text{H}^+\\text{(aq)} + \\text{Lac}^-\\text{(aq)} \\qquad K_a = 1.4 \\times 10^{-4}$$</p>
        <p>For buffered aqueous solutions, the pH is governed by the Henderson-Hasselbalch relationship:</p>
        <p class="formula-box">$$\\text{pH} = \\text{p}K_a + \\log_{10}\\left(\\frac{[\\text{Lac}^-]}{[\\text{HLac}]}\\right)$$</p>
        <p><em>Useful approximations: $\\log_{10}(1.4) \\approx 0.15$; $\\log_{10}(2) \\approx 0.30$; $\\log_{10}(3) \\approx 0.48$; $\\log_{10}(5) \\approx 0.70$.</em></p>
      `,
      questions: [
        {
          id: "q-s3-5",
          stem: "What is the $\\text{p}K_a$ of lactic acid?",
          options: [
            "A. 3.60",
            "B. 3.85",
            "C. 4.15",
            "D. 4.85"
          ],
          correct: 1,
          explanation: "pKa = -log10(Ka) = -log10(1.4 × 10^-4) = 4 - log10(1.4) = 4 - 0.15 = 3.85. Watch out for the classic ACER trap of adding 0.15 instead of subtracting (which gives 4.15)."
        },
        {
          id: "q-s3-6",
          stem: "A biochemist prepares $500\\text{ mL}$ of a buffer containing $0.15\\text{ M}$ lactic acid ($\\text{HLac}$) and $0.45\\text{ M}$ sodium lactate ($\\text{NaLac}$). What is the pH of this buffer solution?",
          options: [
            "A. 3.37",
            "B. 3.85",
            "C. 4.15",
            "D. 4.33"
          ],
          correct: 3,
          explanation: "Using Henderson-Hasselbalch: pH = pKa + log10([Lac-]/[HLac]) = 3.85 + log10(0.45 / 0.15) = 3.85 + log10(3) = 3.85 + 0.48 = 4.33."
        },
        {
          id: "q-s3-7",
          stem: "In active skeletal muscle at $\\text{pH } 6.85$, approximately what percentage of total lactate species ($[\\text{HLac}] + [\\text{Lac}^-]$) exists in the protonated acid form ($\\text{HLac}$)?",
          options: [
            "A. 0.1%",
            "B. 1.0%",
            "C. 3.0%",
            "D. 99.9%"
          ],
          correct: 0,
          explanation: "At pH = 6.85 and pKa = 3.85, pH - pKa = 3.00. Therefore log10([Lac-]/[HLac]) = 3.00, meaning [Lac-]/[HLac] = 10^3 = 1000 : 1. Thus the protonated form [HLac] is 1 / 1001 ≈ 0.1% of the total."
        },
        {
          id: "q-s3-8",
          stem: "If $0.05\\text{ mol}$ of solid $\\text{NaOH}$ is added to $1.0\\text{ L}$ of a solution initially containing $0.25\\text{ M HLac}$ only (assuming negligible volume change), what is the resulting pH?",
          options: [
            "A. 3.15",
            "B. 3.25",
            "C. 3.85",
            "D. 4.45"
          ],
          correct: 1,
          explanation: "Step 1: Strong base NaOH (0.05 mol) neutralizes 0.05 mol of HLac to form 0.05 mol of Lac-. Step 2: Remaining [HLac] = 0.25 - 0.05 = 0.20 M; formed [Lac-] = 0.05 M. Step 3: pH = pKa + log10(0.05 / 0.20) = 3.85 + log10(1/4) = 3.85 - log10(4) = 3.85 - 2×log10(2) = 3.85 - 0.60 = 3.25."
        }
      ]
    },

    // UNIT 5: Section III — Physics: Hemodynamics & Poiseuille's Law
    {
      id: "unit-s3-3",
      section: "S3",
      topic: "Physics: Fluids & Hemodynamics",
      title: "Unit 5 (Questions 16–18): Arterial Stenosis & Poiseuille Flow",
      stimulus: `
        <p>Laminar flow of an incompressible fluid of viscosity $\\eta$ through a cylindrical vessel of length $L$ and internal radius $r$ is described by Poiseuille’s Law:</p>
        <p class="formula-box">$$Q = \\frac{\\Delta P \\cdot \\pi r^4}{8 \\eta L}$$</p>
        <p>where $Q$ is the volumetric flow rate ($\\text{m}^3/\\text{s}$) and $\\Delta P$ is the pressure drop across the segment. The continuity equation relates flow rate to average fluid speed $v$ and cross-sectional area $A = \\pi r^2$:</p>
        <p class="formula-box">$$Q = A \\cdot v$$</p>
        <p>In a healthy coronary artery segment of length $L$, the internal radius is $r_0 = 2.0\\text{ mm}$. A patient develops an atherosclerotic plaque across the full length of this segment, reducing the effective internal radius to $r_1 = 1.0\\text{ mm}$.</p>
      `,
      questions: [
        {
          id: "q-s3-9",
          stem: "If the pressure drop $\\Delta P$ across the coronary segment and blood viscosity $\\eta$ remain unchanged, the volumetric blood flow rate $Q$ through the narrowed segment compared to the healthy segment will be:",
          options: [
            "A. reduced to 1/2 of its original value.",
            "B. reduced to 1/4 of its original value.",
            "C. reduced to 1/8 of its original value.",
            "D. reduced to 1/16 of its original value."
          ],
          correct: 3,
          explanation: "By Poiseuille's Law, Q ∝ r^4 when ΔP, η, and L are constant. Since the radius is halved (r1 / r0 = 1/2), the new flow rate Q1 = Q0 × (1/2)^4 = 1/16 of its original value."
        },
        {
          id: "q-s3-10",
          stem: "Suppose instead that downstream autoregulation and cardiac output maintain the SAME volumetric flow rate $Q$ through the narrowed segment ($r_1 = 1.0\\text{ mm}$) as through the adjacent healthy segment ($r_0 = 2.0\\text{ mm}$). How does the average blood speed $v_1$ in the narrowed segment compare to $v_0$ in the healthy segment?",
          options: [
            "A. v1 = 2 v0",
            "B. v1 = 4 v0",
            "C. v1 = 8 v0",
            "D. v1 = 16 v0"
          ],
          correct: 1,
          explanation: "Careful! This question asks about flow SPEED v when volumetric flow rate Q is held constant—that's the continuity equation (Q = A·v = πr^2·v), NOT Poiseuille's r^4. Since Q is constant, v ∝ 1/r^2. Halving r reduces area A by 4, so speed increases 4-fold (v1 = 4 v0)."
        },
        {
          id: "q-s3-11",
          stem: "If the plaque instead reduces the internal radius by only $20\\%$ (so $r_2 = 0.80\\,r_0$) while $\\Delta P$ remains constant, the new volumetric flow rate $Q_2$ is closest to:",
          options: [
            "A. 0.80 Q0",
            "B. 0.64 Q0",
            "C. 0.51 Q0",
            "D. 0.41 Q0"
          ],
          correct: 3,
          explanation: "Q2 / Q0 = (0.80)^4 = (0.64)^2. Mental math: 0.64 × 0.64 ≈ 0.4096 ≈ 0.41 Q0. Even a modest 20% narrowing cuts blood flow by nearly 60%!"
        }
      ]
    },

    // UNIT 6: Section III — Organic Chemistry & Stereochemistry
    {
      id: "unit-s3-4",
      section: "S3",
      topic: "Chemistry: Organic Mechanisms & Stereochem",
      title: "Unit 6 (Questions 19–21): Stereoselective Substitution & Oxidation",
      stimulus: `
        <p>Consider the following reaction sequence starting from optically pure <strong>(2R)-2-bromobutane</strong> (Compound <strong>1</strong>):</p>
        <div class="formula-box">
          <p><strong>Pathway I:</strong> (2R)-2-bromobutane + $\\text{NaOH}$ (in anhydrous DMSO, polar aprotic solvent) $\\rightarrow$ Compound <strong>2</strong> (major substitution product)</p>
          <p><strong>Pathway II:</strong> (2R)-2-bromobutane + $\\text{H}_2\\text{O}$ (in aqueous ethanol, polar protic solvent, heat) $\\rightarrow$ Mixture <strong>3</strong> (substitution products)</p>
          <p><strong>Pathway III:</strong> Compound <strong>2</strong> + $\\text{CrO}_3 / \\text{H}_2\\text{SO}_4$ (Jones oxidation) $\\rightarrow$ Compound <strong>4</strong> ($\\text{C}_4\\text{H}_8\\text{O}$)</p>
        </div>
        <p><em>Atomic numbers: $\\text{H}=1, \\text{C}=6, \\text{O}=8, \\text{Br}=35$.</em></p>
      `,
      questions: [
        {
          id: "q-s3-12",
          stem: "What is the predominant mechanism and stereochemical outcome of Pathway I to form Compound 2?",
          options: [
            "A. SN1 reaction yielding a racemic mixture of (2R)- and (2S)-butan-2-ol.",
            "B. SN2 reaction yielding predominantly (2S)-butan-2-ol with inversion of configuration.",
            "C. SN2 reaction yielding predominantly (2R)-butan-2-ol with retention of configuration.",
            "D. E1 elimination yielding exclusively but-1-ene."
          ],
          correct: 1,
          explanation: "A secondary alkyl halide treated with a strong nucleophile (OH-) in a polar aprotic solvent (DMSO) undergoes a concerted SN2 reaction via backside attack. Since OH- has the same #1 Cahn-Ingold-Prelog priority as the departing Br- (both outrank ethyl, methyl, H), inversion of configuration inverts (2R) into (2S)-butan-2-ol."
        },
        {
          id: "q-s3-13",
          stem: "How many stereogenic (chiral) centres are present in Compound 4 ($\\text{C}_4\\text{H}_8\\text{O}$)?",
          options: [
            "A. 0",
            "B. 1",
            "C. 2",
            "D. 4"
          ],
          correct: 0,
          explanation: "Compound 2 is a secondary alcohol (butan-2-ol). Oxidation with CrO3/H2SO4 converts the secondary alcohol at C2 into a ketone (butan-2-one, CH3-C(=O)-CH2-CH3). Because C2 is now sp2-hybridized with a C=O double bond, chirality is destroyed and Compound 4 has 0 chiral centres."
        },
        {
          id: "q-s3-14",
          stem: "If Compound 4 (butan-2-one) is subsequently reduced with sodium borohydride ($\\text{NaBH}_4$) in methanol followed by aqueous workup, the product mixture will be:",
          options: [
            "A. optically pure (2S)-butan-2-ol.",
            "B. optically pure (2R)-butan-2-ol.",
            "C. an optically inactive racemic (50:50) mixture of (2R)- and (2S)-butan-2-ol.",
            "D. an achiral primary alcohol (butan-1-ol)."
          ],
          correct: 2,
          explanation: "Butan-2-one is a planar achiral ketone (prochiral carbonyl). Achiral hydride reagent NaBH4 attacks the trigonal planar carbonyl carbon with equal probability from the top (Re) and bottom (Si) faces, producing an equimolar (50:50) racemic mixture of (2R)- and (2S)-butan-2-ol, which is optically inactive."
        }
      ]
    },

    // UNIT 7: Section III — Biology: Enzyme Kinetics & Lineweaver-Burk
    {
      id: "unit-s3-5",
      section: "S3",
      topic: "Biology: Enzyme Kinetics",
      title: "Unit 7 (Questions 22–24): Enzyme Inhibition & Double-Reciprocal Plots",
      stimulus: `
        <p>A newly discovered bacterial transpeptidase catalyses cross-linking of peptidoglycan with Michaelis-Menten kinetics:</p>
        <p class="formula-box">$$v_0 = \\frac{V_{\\max}[S]}{K_m + [S]}$$</p>
        <p>Researchers measured initial reaction velocity $v_0$ ($\\mu\\text{mol/min}$) across varying substrate concentrations $[S]$ ($\\text{mM}$) in the absence of inhibitor (<strong>Control</strong>), in the presence of $10\\,\\mu\\text{M}$ <strong>Compound X</strong>, and in the presence of $10\\,\\mu\\text{M}$ <strong>Compound Y</strong>.</p>
        <table class="data-table">
          <thead>
            <tr>
              <th>Condition</th>
              <th>$y$-intercept ($1/V_{\\max}$) on Lineweaver-Burk ($\\text{min}/\\mu\\text{mol}$)</th>
              <th>$x$-intercept ($-1/K_m$) on Lineweaver-Burk ($\\text{mM}^{-1}$)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Control (No Inhibitor)</strong></td>
              <td>$0.05$</td>
              <td>$-0.50$</td>
            </tr>
            <tr>
              <td><strong>+ Compound X ($10\\,\\mu\\text{M}$)</strong></td>
              <td>$0.05$</td>
              <td>$-0.125$</td>
            </tr>
            <tr>
              <td><strong>+ Compound Y ($10\\,\\mu\\text{M}$)</strong></td>
              <td>$0.20$</td>
              <td>$-0.50$</td>
            </tr>
          </tbody>
        </table>
      `,
      questions: [
        {
          id: "q-s3-15",
          stem: "In the uninhibited Control reaction, what are the values of $V_{\\max}$ and $K_m$?",
          options: [
            "A. Vmax = 5 μmol/min; Km = 0.5 mM",
            "B. Vmax = 20 μmol/min; Km = 2.0 mM",
            "C. Vmax = 20 μmol/min; Km = 0.5 mM",
            "D. Vmax = 50 μmol/min; Km = 2.0 mM"
          ],
          correct: 1,
          explanation: "On a Lineweaver-Burk plot, y-intercept = 1/Vmax = 0.05, so Vmax = 1 / 0.05 = 20 μmol/min. The x-intercept = -1/Km = -0.50 mM^-1, so Km = 1 / 0.50 = 2.0 mM."
        },
        {
          id: "q-s3-16",
          stem: "Based on the table, how do Compound X and Compound Y inhibit the bacterial transpeptidase?",
          options: [
            "A. Compound X is a competitive inhibitor; Compound Y is a non-competitive inhibitor.",
            "B. Compound X is a non-competitive inhibitor; Compound Y is a competitive inhibitor.",
            "C. Both X and Y are uncompetitive inhibitors.",
            "D. Compound X binds only to the enzyme-substrate (ES) complex."
          ],
          correct: 0,
          explanation: "With Compound X, 1/Vmax stays 0.05 (Vmax unchanged) while |-1/Km| shrinks from 0.50 to 0.125 (meaning apparent Km increased 4-fold from 2.0 mM to 8.0 mM)—the hallmark of a competitive inhibitor. With Compound Y, -1/Km is unchanged (Km = 2.0 mM) while 1/Vmax increases 4-fold (Vmax drops from 20 to 5 μmol/min)—the hallmark of a pure non-competitive inhibitor."
        },
        {
          id: "q-s3-17",
          stem: "In the presence of $10\\,\\mu\\text{M}$ Compound X, what initial reaction velocity $v_0$ is observed when the substrate concentration $[S]$ is $8.0\\text{ mM}$?",
          options: [
            "A. 5.0 μmol/min",
            "B. 10.0 μmol/min",
            "C. 16.0 μmol/min",
            "D. 20.0 μmol/min"
          ],
          correct: 1,
          explanation: "With Compound X, x-intercept = -1/Km_app = -0.125 mM^-1 = -1/8, so Km_app = 8.0 mM and Vmax = 20 μmol/min. When [S] = Km_app = 8.0 mM, the reaction velocity v0 is by definition exactly 1/2 Vmax = 10.0 μmol/min!"
        }
      ]
    },

    // UNIT 8: Section I — Behavioral Economics & Social Science Data
    {
      id: "unit-s1-3",
      section: "S1",
      topic: "Social Science & Behavioural Paradoxes",
      title: "Unit 8 (Questions 25–26): Crowding Out Intrinsic Motivation",
      stimulus: `
        <p>Classical economic theory assumes that extrinsic incentives and intrinsic moral motivation are additive: if citizens already donate blood out of civic duty, paying them should only increase supply. Yet when researchers in Haifa introduced a small monetary fine for parents who arrived late to collect their children from day-care centres, tardiness promptly doubled. Worse still, when the fine was revoked twelve weeks later, late pickups remained at the elevated rate.</p>
        <p>Economists Uri Gneezy and Aldo Rustichini explained this reversal through the concept of <em>frame shifting</em>. Prior to the fine, arriving on time was governed by an unwritten social contract: arriving late meant imposing uncompensated burden on a teacher, triggering guilt. Once a price tag was attached, the interaction was re-classified in parents’ minds from a moral obligation into a market commodity—a babysitting surcharge they could purchase without shame. And once a moral norm has been monetised, simply removing the price tag rarely resurrects the original ethical taboo.</p>
      `,
      questions: [
        {
          id: "q-s1-8",
          stem: "Why did late pickups remain high even after the Haifa day-care centres cancelled the monetary fine?",
          options: [
            "A. Parents were unaware that the fine had been abolished.",
            "B. The introduction of a fee had permanently eroded the social stigma that previously deterred lateness.",
            "C. Teachers preferred staying late once they were accustomed to the schedule.",
            "D. Classical economic theory predicts that demand rises when prices drop to zero."
          ],
          correct: 1,
          explanation: "The final sentence states: 'once a moral norm has been monetised, simply removing the price tag rarely resurrects the original ethical taboo.' Introducing the fine destroyed the moral frame ('guilt'), and removing the fine left parents with neither a financial cost nor the restored moral norm (Option B)."
        },
        {
          id: "q-s1-9",
          stem: "Which of the following policies would be MOST vulnerable to the counterproductive effect described in the passage?",
          options: [
            "A. Imposing heavy prison sentences for corporate embezzlement.",
            "B. Offering neighbours a nominal $15 token payment to host community recycling bins they previously hosted voluntarily.",
            "C. Reducing public transport fares during off-peak hours.",
            "D. Awarding anonymous scholarships to low-income medical students."
          ],
          correct: 1,
          explanation: "The passage warns against replacing an existing intrinsic/civic norm with a small monetary price ('crowding out' civic duty by turning it into a cheap market transaction). Paying a nominal $15 for a task previously done out of civic pride shifts the frame from 'generous neighbour' to 'cheaply paid contractor', risking lower participation (Option B)."
        }
      ]
    }
  ]
};
