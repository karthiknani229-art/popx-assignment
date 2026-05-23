# POPX React Assignment

A pixel-perfect mobile UI implementation built with React, featuring multi-page routing, form validation, and simulated authentication.

## Live Demo

- Frontend: https://popx-assignment-karthik.netlify.app/

## Tech Stack

**Frontend:** React.js, Vite, React Router DOM, CSS

**Deployment:** Netlify

## Features

- Pixel-perfect mobile UI centered on webpage
- Multi-page routing — Welcome, Signup, Login, Account
- Controlled forms with validation (required fields, email format, password min length)
- Disabled submit buttons until all inputs are valid
- Simulated authentication using localStorage
- Protected Account page with logout functionality
- Reusable InputField component

## Project Structure

```
src/
├── components/
│   └── InputField.jsx
├── pages/
│   ├── Welcome.jsx
│   ├── Signup.jsx
│   ├── Login.jsx
│   └── Account.jsx
├── styles/
│   └── global.css
├── App.jsx
└── main.jsx
```

## Local Setup

```bash
git clone https://github.com/karthiknani229-art/popx-assignment.git
cd popx-assignment
npm install
npm run dev
```

## Author

Penta Karthik — [GitHub](https://github.com/karthiknani229-art)
