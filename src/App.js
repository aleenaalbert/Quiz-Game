import React, { useState } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import "bootstrap/dist/css/bootstrap.min.css";
import Question from './Components/Question';
import Settings from './Components/Settings';
import Score from './Components/Score';
import qBank from './Components/QuestionBank';
import './App.css'; 

const App = () => {
  const [questionBank] = useState(qBank);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [quizEnd, setQuizEnd] = useState(false);
  const [difficulty, setDifficulty] = useState("easy");

  const navigate = useNavigate();

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    checkAnswer();
    handleNextQuestion();
  };

  const checkAnswer = () => {
    if (selectedOption === questionBank[difficulty][currentQuestion].answer) {
      const points = 10 / questionBank[difficulty].length; 
      setScore((prevScore) => prevScore + points);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion + 1 < questionBank[difficulty].length) {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedOption("");
    } else {
      setQuizEnd(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedOption("");
    setScore(0);
    setQuizEnd(false);
    setDifficulty("easy");
    navigate("/");
  };

  const handleSetDifficulty = (difficulty) => {
    setDifficulty(difficulty);
    navigate("/quiz");
  };

  const getMaxScore = () => {
    return 10; 
  };

  const maxScore = getMaxScore();

  return (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h1 className="app-title">QUIZ APP</h1>
      <Routes>
        <Route
          path="/"
          element={
            <AnimatePresence>
              <motion.div
                key="settings"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.3 }}
              >
                <Settings setDifficulty={handleSetDifficulty} />
              </motion.div>
            </AnimatePresence>
          }
        />
        <Route
          path="/quiz"
          element={
            <AnimatePresence>
              {!quizEnd ? (
                <motion.div
                  key={`question-${currentQuestion}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Question
                    question={questionBank[difficulty][currentQuestion]}
                    selectedOption={selectedOption}
                    onOptionChange={handleOptionChange}
                    onSubmit={handleFormSubmit}
                  />
                </motion.div>
              ) : (
                <motion.div
                  key="score"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <Score score={score} onRestartQuiz={handleRestartQuiz} maxScore={maxScore} />
                </motion.div>
              )}
            </AnimatePresence>
          }
        />
      </Routes>
    </div>
  );
};

export default App;

