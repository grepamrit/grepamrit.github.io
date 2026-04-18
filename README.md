# ak_ | Terminal-Themed Portfolio

A retro-futuristic, terminal-inspired personal portfolio built with vanilla HTML, CSS, and JavaScript.

## Features

- **Terminal Aesthetic** — CRT scanlines, blinking cursor, and command-line styled navigation
- **Dark / Light Mode** — Toggle between a neon-green hacker terminal and a warm Kindle-style reading theme
- **Fully Data-Driven** — All content lives in `data.js` for easy updates without touching HTML
- **Responsive** — Works across desktop and mobile with a hamburger menu

## Tech Stack

- HTML5 / CSS3 / Vanilla JS
- [Fira Code](https://fonts.google.com/specimen/Fira+Code) monospace font
- [Font Awesome](https://fontawesome.com/) icons

## Quick Start

```bash
# Clone the repo
git clone https://github.com/grepamrit/portfolio.git
cd portfolio

# Serve locally
python3 -m http.server 8080
# Open http://localhost:8080
```

## Project Structure

```
portfolio/
├── index.html    # Page structure
├── styles.css    # All styling & themes
├── script.js     # DOM rendering & interactions
├── data.js       # Portfolio content (edit this!)
└── README.md
```

## Customization

Edit `data.js` to update your info — hero section, about, skills, experience, certifications, recommendations, and contact details. No HTML editing required.

## License

MIT
