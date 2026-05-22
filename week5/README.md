---

# Week 5 Assignments

This repository contains my solutions and practice files for week 5, focusing on modern CSS layouts (Flexbox, Grid) and an introduction to React.

---

## Folder Structure

```
week5/
├── flex.html, flex.css         # Flexbox practice
├── grid.html, grid.css         # CSS Grid practice
├── index.html, style.css       # Table and layout practice
├── react-1/                    # React project (Vite + Tailwind)
│   ├── public/
│   ├── src/
│   │   ├── App.jsx, App.css, index.css, main.jsx
│   │   └── components/
│   │       ├── navbar.jsx
│   │       ├── footer.jsx
│   │       ├── User.jsx
│   │       └── userlist.jsx
│   ├── package.json, vite.config.js, README.md
│   └── ...
└── README.md                   # This file
```

---

## Assignment Overview

###  CSS Flexbox

- Practiced aligning items inside a container using Flexbox.
- Used properties like `flex-direction`, `justify-content`, and `align-items`.
- See: `flex.html`, `flex.css`, and `index.html`.

### CSS Grid

- Built more complex layouts using CSS Grid.
- Practiced `grid-template-columns`, grid gaps, and responsive design.
- See: `grid.html`, `grid.css`.

###  Introduction to React

- Set up a React project using Vite and Tailwind CSS.
- Broke the UI into reusable components: Navbar, UserList, User, Footer.
- Used the `map` function to render lists and passed data via props.
- See: `react-1/` folder.

---

## How to Run the React Project

1. Navigate to the `react-1` folder:
   ```bash
   cd react-1
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at [http://localhost:5173](http://localhost:5173).

---

## Key Learnings

- Gained confidence with Flexbox and Grid for responsive layouts.
- Understood the difference between Flexbox (1D) and Grid (2D) layouts.
- Learned React basics: components, props, and rendering lists.
- Realized the organizational benefits of component-based UI development.

