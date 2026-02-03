# Cyber Case Files

Cyber Case Files is a client-side cybersecurity investigation game for Year 9 students. Learners collect evidence, identify the attack, choose the best prevention steps, and write a short case report. It is fully static (HTML/CSS/JS only), so it can be hosted on GitHub Pages and works offline after the first load.

## Files
- `index.html` — main game layout
- `styles.css` — styling and responsive layout
- `app.js` — game logic and case data
- `assets/` — optional images/icons (not required)

## GitHub Pages setup
1. Create a new GitHub repository (or use an existing one).
2. Upload `index.html`, `styles.css`, `app.js`, and this `README.md` to the repository root.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Select the `main` branch and `/root` folder, then save.
6. GitHub will display a public URL once the site is published.

## Teacher notes
- Use the **Difficulty** selector to control hint strength.
- Turn on **Teacher Mode** to show model answers and evidence explanations.
- Students can download their case report as a `.txt` file.

## In-browser test checklist
- Can complete each case from start to finish.
- Evidence gating works (must pin 4+ items).
- Score updates correctly when answers change.
- Report download creates a `.txt` file.
- Layout works on mobile and desktop.
