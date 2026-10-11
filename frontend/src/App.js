import React, { useEffect, useState } from "react";
import "./styles.css";

function App() {
  const [questions, setQuestions] = useState([]);
  const [answers, setAnswers] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/quiz")
      .then((response) => response.json())
      .then((data) => setQuestions(data))
      .catch((error) => console.error("Error fetching quiz:", error));
  }, []);

  const handleOptionSelect = (questionId, option) => {
    setAnswers((prev) => ({ ...prev, [questionId]: option }));
  };

  const nextQuestion = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const previousQuestion = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const submitQuiz = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ answers })
      });

      const data = await response.json();
      setResult(data);
      setSubmitted(true);
    } catch (error) {
      console.error("Error submitting quiz:", error);
    }
  };

  if (!questions.length) {
    return <div className="loading">Loading questions...</div>;
  }

  const question = questions[currentIndex];

  return (
    <div className="app-container">
      {!submitted ? (
        <div className="quiz-card">
          <h1>Quiz App</h1>
          <p className="question-counter">
            Question {currentIndex + 1} / {questions.length}
          </p>

          <h2>{question.question}</h2>

          <div className="options">
            {question.options.map((option) => (
              <label key={option} className="option-item">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  checked={answers[question.id] === option}
                  onChange={() => handleOptionSelect(question.id, option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>

          <div className="button-row">
            <button
              className="nav-button"
              onClick={previousQuestion}
              disabled={currentIndex === 0}
            >
              Previous
            </button>

            {currentIndex < questions.length - 1 ? (
              <button className="nav-button primary" onClick={nextQuestion}>
                Next
              </button>
            ) : (
              <button className="submit-button" onClick={submitQuiz}>
                Submit Quiz
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="result-card">
          <h1>Quiz Result</h1>
          <p>
            <strong>Total Marks:</strong> {result.score} / {result.totalMarks}
          </p>
          <p>
            <strong>Percentage:</strong> {result.percentage}%
          </p>
          <p>
            <strong>Total Questions:</strong> {result.totalQuestions}
          </p>
          <p>
            <strong>Correct Answers:</strong> {result.score}
          </p>
        </div>
      )}
    </div>
  );
}

export default App;
