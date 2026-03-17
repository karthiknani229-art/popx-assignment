POPX React Assignment

Live Demo

https://popx-assignment-karthik.netlify.app/

GitHub Repository

https://github.com/karthiknani229-art/popx-assignment

---

 Overview

This project is a pixel-perfect implementation of the POPX mobile UI using React.
It demonstrates frontend development fundamentals including routing, form handling, and component-based architecture.

---

Tech Stack

* React (Vite)
* React Router DOM
* CSS (Custom Styling)

---

Features

UI & Layout

* Pixel-perfect UI based on design
* Mobile app interface centered on webpage
* Clean and consistent styling

Navigation

* Multi-page routing using React Router
* Smooth navigation between screens:

  * Welcome
  * Signup
  * Login
  * Account

Forms & Validation

* Controlled React forms
* Required field validation
* Email format validation
* Password minimum length check (8 characters)
* Disabled submit buttons until valid input

uthentication (Simulated)

* User data stored using localStorage
* Login validation against stored data
* Protected Account page
* Logout functionality

Code Quality

* Reusable components (InputField)
* Clean folder structure
* Readable and maintainable code

---

 Project Structure

```
src
 ├── components
 │    └── InputField.jsx
 │
 ├── pages
 │    ├── Welcome.jsx
 │    ├── Signup.jsx
 │    ├── Login.jsx
 │    └── Account.jsx
 │
 ├── styles
 │    └── global.css
 │
 ├── App.jsx
 └── main.jsx
```

---

Installation & Setup

Clone the repository:

```
git clone https://github.com/karthiknani229-art/popx-assignment
```

Navigate into the project:

```
cd popx-assignment
```

Install dependencies:

```
npm install
```

Run the development server:

```
npm run dev
```

---

Deployment

This project is deployed using Netlify.

---

 Notes

* This project focuses on frontend implementation only.
* Authentication is simulated using localStorage.
* UI is designed to match the given design requirements.

---

Author

Penta Karthik
GitHub:https://github.com/karthiknani229-art/popx-assignment
