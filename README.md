# Portfolio V2 — Labhanshu Vyas

A standalone, static product portfolio. This directory is independent of the existing `Labhanshuvyas.github.io` repository and contains no configuration that edits or deploys that repository.

## View locally

Run `python3 -m http.server 8000` in this directory, then open `http://localhost:8000`.
The generated HTML files also work without a build step. JavaScript is used only for the mobile navigation and accessible report viewer.

## Structure

- `index.html`: approved introduction, selected work, About, experience, skills, leadership and unchanged contact copy.
- `client-work.html`: documented contribution summary; no invented measurements or product screenshots.
- Four concept pages: clear concept status, proposed scope, trade-offs and future validation.
- `assets/`: the eight original WebP report assets and the portfolio favicon.
- `styles.css` / `script.js`: responsive design, mobile menu and full-screen zoomable report reader.
- `build.py`: optional standard-library Python generator for the six HTML files.

## Edit

Edit `build.py`, then run `python3 build.py` to regenerate the pages. Edit CSS and JavaScript directly. The site does not require npm, a framework, analytics, a database, or API credentials.

## GitHub repository

Use the repository slug `Portfolio-V2` with display title “Portfolio V2”. Upload these files at the repository root, preserving the `assets` folder.

To host on GitHub Pages, open this repository’s **Settings → Pages** and select **Deploy from a branch**, **main**, **/(root)**. No custom domain is configured. This creates a project site rather than replacing the existing user site. Publishing is separate from creating or populating the repository.

## Content integrity

The introduction is the wording approved in the conversation. Contact copy and destinations are preserved. Experience dates and role descriptions are taken from the existing published portfolio as of this build; they have not been independently verified against employment records.

No unsubstantiated percentage improvements, test results, interview counts or customer adoption claims have been added. The concept tests are explicitly proposed. The retained original report artwork contains aspirational language; the accompanying pages explain its concept status. The client page is a contribution summary, not a fabricated full delivery case study.

## Asset ownership

The supplied reports retain their ownership lines. Names and logos of third-party products identify independent concepts; they do not imply employment, endorsement or affiliation. Do not remove ownership attribution from the report images.
