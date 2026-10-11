# Quiz App

A full-stack quiz application built with Node.js + Express backend and React frontend.

## Features
- 10 questions
- Multiple-choice quiz
- Score calculation at the end
- Marks shown on final result page
- Runs locally on localhost

## Project structure
```text
quiz/
├── backend/
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── package.json
│   ├── public/
│   │   └── index.html
│   └── src/
│       ├── App.js
│       ├── index.js
│       └── styles.css
├── .gitignore
└── README.md
```

## Backend setup
```bash
cd backend
npm install
npm start
```
The backend runs on: http://localhost:5000

## Frontend setup
```bash
cd frontend
npm install
npm start
```
The frontend runs on: http://localhost:3000

## API endpoints
- GET /api/quiz
- POST /api/submit

## Result display
The final screen shows:
- Total marks
- Percentage
- Total questions attempted

## Notes
Make sure the backend is running before opening the frontend app.
