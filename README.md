# Frontend-Task

Simple static site (HTML/CSS/JS) ready to deploy to GitHub Pages or any static host.

How to deploy

- GitHub Pages (recommended): in the repository Settings → Pages set Source to `main` branch and folder `/` (root).
- Netlify / Vercel: connect your GitHub repo and deploy the `main` branch. No build command required.

Notes
- This project contains an `assignment/` folder that was previously added as an embedded Git repository. If you want it to be tracked by the outer repo, remove it from the index with `git rm --cached assignment`.
