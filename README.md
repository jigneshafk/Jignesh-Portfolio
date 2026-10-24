# Personal Portfolio Website

Responsive personal portfolio for **Jignesh**, built with HTML5, CSS3 and Bootstrap 5.

## Features
- Sections: Navbar, Home (hero with photo), About Me, Skills, Featured Projects, Contact Form
- Light / dark mode toggle (remembers your choice)
- Fully responsive: mobile, tablet and desktop (Bootstrap grid + custom CSS)
- Typing effect, scroll-reveal animations, animated skill bars and counters
- Contact form with client-side validation
- Scroll spy navigation and back-to-top button

## Tech Stack
HTML5, CSS3 (custom properties, glassmorphism), Bootstrap 5.3, Bootstrap Icons, vanilla JavaScript

## Project Structure
```
portfolio/
├── index.html
├── style.css
├── script.js
├── images/
│   └── profile.jpg
└── README.md
```

## Run Locally
Open `index.html` in a browser, or serve the folder:
```
python -m http.server 8000
```
Then visit http://localhost:8000

## Customise
- Replace `images/profile.jpg` with your photo
- Update the GitHub, LinkedIn and email links in `index.html` (search for `your-username`, `your-profile`, `your-email@example.com`)

## Deploy
Push to GitHub, then enable **Settings → Pages → Deploy from branch (main)** for a live link.
