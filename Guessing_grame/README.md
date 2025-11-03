# Guessing Game — Web Frontend

This folder contains a simple web frontend for the number guessing game.

Files:
- `web/index.html` — the page to open in a browser.
- `web/styles.css` — basic styles.
- `web/script.js` — game logic in JavaScript.

How to run:
1. Open `Guessing_grame/web/index.html` in your browser (double-click or drag to a browser).
2. Or serve the folder with a simple HTTP server (recommended when using fetch or modules):

   Python 3 (from `D:\data_science\project`):

   ```powershell
   cd .\Guessing_grame\web
   python -m http.server 8000
   # then open http://localhost:8000 in your browser
   ```

Notes:
- The frontend uses the same gameplay: guess a number (1–100) with up to 7 attempts. It provides higher/lower feedback and a restart button.
- I assumed the intended secret range is 1..100 (the Python file had a small off-by-one using 0 in randint). If you prefer preserving the original 0..100 behavior, I can change it.
