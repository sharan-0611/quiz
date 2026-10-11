const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const questions = [
  {
    id: 1,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Transfer Machine Language",
      "Hyper Tool Multi Language",
      "Home Tool Markup Language"
    ],
    correctAnswer: "Hyper Text Markup Language",
    marks: 1
  },
  {
    id: 2,
    question: "Which tag is used to create a hyperlink in HTML?",
    options: ["<link>", "<a>", "<href>", "<url>"],
    correctAnswer: "<a>",
    marks: 1
  },
  {
    id: 3,
    question: "Which CSS property changes the text color?",
    options: ["background-color", "color", "font-size", "margin"],
    correctAnswer: "color",
    marks: 1
  },
  {
    id: 4,
    question: "Which JavaScript keyword declares a block-scoped variable?",
    options: ["var", "let", "const", "function"],
    correctAnswer: "let",
    marks: 1
  },
  {
    id: 5,
    question: "Which data structure stores an ordered list of values in JavaScript?",
    options: ["String", "Object", "Array", "Boolean"],
    correctAnswer: "Array",
    marks: 1
  },
  {
    id: 6,
    question: "Which HTML element is used for the largest heading?",
    options: ["<h1>", "<head>", "<heading>", "<h6>"],
    correctAnswer: "<h1>",
    marks: 1
  },
  {
    id: 7,
    question: "Which CSS property sets the spacing outside an element?",
    options: ["padding", "margin", "border", "display"],
    correctAnswer: "margin",
    marks: 1
  },
  {
    id: 8,
    question: "Which method converts a JavaScript object to JSON?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "Object.keys()",
      "Object.values()"
    ],
    correctAnswer: "JSON.stringify()",
    marks: 1
  },
  {
    id: 9,
    question: "Which command installs dependencies in a Node.js project?",
    options: ["npm run", "npm install", "node start", "npm init"],
    correctAnswer: "npm install",
    marks: 1
  },
  {
    id: 10,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Styling System",
      "Cascading Style Sheets",
      "Coding Style Syntax"
    ],
    correctAnswer: "Cascading Style Sheets",
    marks: 1
  }
];

app.get("/api/quiz", (req, res) => {
  res.json(questions);
});

app.post("/api/submit", (req, res) => {
  const { answers = {} } = req.body;

  let score = 0;
  let totalMarks = 0;

  questions.forEach((question) => {
    totalMarks += question.marks;
    const selectedAnswer = answers[question.id];

    if (selectedAnswer === question.correctAnswer) {
      score += question.marks;
    }
  });

  res.json({
    score,
    totalMarks,
    percentage: Math.round((score / totalMarks) * 100),
    totalQuestions: questions.length
  });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
