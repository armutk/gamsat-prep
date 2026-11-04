#!/usr/bin/env python3
"""Lightweight local + LAN server for GAMSAT A-to-Z Prep Suite.
Serves static files and persists user progress to data/state.json.
"""
import json
import os
import socket
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent
DATA_DIR = BASE_DIR / "data"
STATE_FILE = DATA_DIR / "state.json"
PORT = int(os.environ.get("GAMSAT_PORT", "8788"))


class ReusableThreadingHTTPServer(ThreadingHTTPServer):
    allow_reuse_address = True


class GamsatHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(BASE_DIR), **kwargs)

    def do_GET(self):
        if self.path == "/api/state":
            DATA_DIR.mkdir(parents=True, exist_ok=True)
            if STATE_FILE.exists():
                data = STATE_FILE.read_bytes()
            else:
                data = b"{}"
            self.send_response(200)
            self.send_header("Content-Type", "application/json")
            self.send_header("Cache-Control", "no-store")
            self.end_headers()
            self.wfile.write(data)
            return
        super().do_GET()

    def do_POST(self):
        if self.path == "/api/state":
            length = int(self.headers.get("Content-Length", "0"))
            raw = self.rfile.read(length)
            try:
                parsed = json.loads(raw.decode("utf-8"))
                DATA_DIR.mkdir(parents=True, exist_ok=True)
                tmp = STATE_FILE.with_suffix(".tmp")
                tmp.write_text(json.dumps(parsed, indent=2), encoding="utf-8")
                tmp.replace(STATE_FILE)
                self.send_response(200)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(b'{"ok":true}')
            except Exception as exc:
                self.send_response(400)
                self.send_header("Content-Type", "application/json")
                self.end_headers()
                self.wfile.write(json.dumps({"ok": False, "error": str(exc)}).encode("utf-8"))
            return
        self.send_response(404)
        self.end_headers()

    def log_message(self, fmt, *args):
        pass


def get_lan_ip():
    try:
        with socket.socket(socket.AF_INET, socket.SOCK_DGRAM) as s:
            s.connect(("8.8.8.8", 80))
            return s.getsockname()[0]
    except Exception:
        return "127.0.0.1"


if __name__ == "__main__":
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    lan_ip = get_lan_ip()
    print(f"GAMSAT A-to-Z Prep App running:")
    print(f"  Local:   http://localhost:{PORT}")
    print(f"  Network: http://{lan_ip}:{PORT}")
    server = ReusableThreadingHTTPServer(("0.0.0.0", PORT), GamsatHandler)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        print("\nShutting down.")
