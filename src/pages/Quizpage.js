import React, { useState } from "react";
import "./Quizpage.js";

function Questions() {
  const questions = [
    {
      quest_title: "What color is Dory?",
      answers: [
        { answer_text: "Blue", isCorrect: true },
        { answer_text: "Red", isCorrect: false },
        { answer_text: "Green", isCorrect: false },
        { answer_text: "Yellow", isCorrect: false },
      ],
    },
    {
      quest_title: "What is the number1 movie on IMDB?",
      answers: [
        { answer_text: "Avatar", isCorrect: false },
        { answer_text: "The Shawshank Redemption", isCorrect: true },
        { answer_text: "The Dark Knight", isCorrect: false },
        { answer_text: "The Godfather: Part II", isCorrect: false },
      ],
    },
    {
      quest_title:
        "Which actress plays Belle in the live-action remake of Beauty & The Beast? ",
      answers: [
        { answer_text: "Emily Blunt", isCorrect: false },
        { answer_text: "Scarlett Johansson", isCorrect: false },
        { answer_text: "Emma Watson", isCorrect: true },
        { answer_text: "Alicia Vikander", isCorrect: false },
      ],
    },
    {
      quest_title: "What's the name of the boy in Ratatouille?",
      answers: [
        { answer_text: "Peter Parker", isCorrect: false },
        { answer_text: "Angelo Penne", isCorrect: false },
        { answer_text: "Mario Spaghetti", isCorrect: false },
        { answer_text: "Alfredo Linguini", isCorrect: true },
      ],
    },
  ];
  ///////////////////////////////////////////////////////////////////////////////
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const AnswerHandler = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  return (
    <section>
      <h1>Quiz page</h1>
      <div className="quiz">
        <div className="question_section">
          <div className="question_count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question_text">
            {questions[currentQuestion].quest_title}
          </div>
        </div>
        <div className="answer_section">
          {questions[currentQuestion].answers.map((answeroption, index) => (
            <button className="button_quiz" onClick={() => AnswerHandler(answeroption.isCorrect)}>
              {answeroption.answer_text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Questions;
