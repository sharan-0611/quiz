# Quiz App

A full-stack quiz application with frontend and backend components. Users can take a 10-question quiz and view their scores at the end.

## Features
- 10 multiple-choice questions
- Real-time score calculation
- Results display with marks
- Fully responsive UI
- RESTful API backend

## Project Structure
```
quiz/
├── backend/          # Node.js/Express backend
├── frontend/         # React frontend
└── README.md
```

## Quick Start

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm start
```
Backend runs on `http://localhost:5000`

### Frontend Setup
```bash
cd frontend
npm install
npm start
```
Frontend runs on `http://localhost:3000`

## API Endpoints
- `GET /api/quiz` - Get all questions
- `POST /api/submit` - Submit quiz answers and get score

## Quiz Structure
- Total Questions: 10
- Question Type: Multiple Choice
- Scoring: Marks displayed at the end
