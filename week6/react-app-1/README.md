
  # React User List App
  
  A simple React application built with Vite and Tailwind CSS that displays a list of users with their details. The project demonstrates component-based architecture, modern styling, and clean code practices.


---

## Features

- Built with [Vite]
- Styled using [Tailwind CSS]
-  Displays a list of users with avatars, names, and emails
- Modular React components: Navbar, Footer, User, UserList
- Responsive layout using Tailwind utility classes

## Project Structure

```
react-1/
├── public/
│   └── favicon.svg
├── src/
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   ├── main.jsx
│   └── components/
│       ├── navbar.jsx
│       ├── footer.jsx
│       ├── User.jsx
│       └── userlist.jsx
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Getting Started

### Prerequisites
- Node.js (v18 or above recommended)
- npm or yarn

### Installation

```bash
npm install
```

### Running the App

```bash
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173) by default.

## Usage

- The main page displays a navigation bar, a grid of user cards, and a footer.
- User data is hardcoded in the `UserList` component for demonstration.
- Easily extendable to fetch users from an API.

## Scripts

- `npm run dev` — Start development server
- `npm run build` — Build for production
- `npm run preview` — Preview production build
- `npm run lint` — Lint code with ESLint

## Customization

- Add more users by editing `src/components/userlist.jsx`.
- Update styles using Tailwind utility classes in component files.

## License

This project is for educational/demo purposes.

---

<div align="center">
  <sub>Made with using React, Vite & Tailwind CSS</sub>
</div>
