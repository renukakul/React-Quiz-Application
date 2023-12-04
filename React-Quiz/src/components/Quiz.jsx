import { useCallback, useState } from "react";
import QUIZCOMPLETELOGO from "/Users/renukakulkarni/Work/ReactAllProjects/React-Quiz-Application/React-Quiz/src/assets/quiz-complete.png";

import QUESTIONS from "../questions.js";


import Question from "./Question.jsx";



export default function Quiz() {
  const [userAns, setUserAns] = useState([]);

  const currentQuestionIndex = userAns.length;
  const quizComplete = currentQuestionIndex === QUESTIONS.length;

  const handleAnsSelect = useCallback(
    function handleAnsButton(selectedAnswer) {
     
      setUserAns((prevUserAns) => {
        return [...prevUserAns, selectedAnswer];
      });

    
    },
    []
  );

  const handleSkipAnswer = useCallback(
    () => handleAnsSelect(null),
    [handleAnsSelect]
  );

  if (quizComplete) {
    return (
      <div id="summary">
        <img src={QUIZCOMPLETELOGO} alt="Trophy" />
        <h2>Quiz Completed !</h2>
      </div>
    );
  }

  return (
    <div id="quiz">
        <Question
            key={currentQuestionIndex}
            index={currentQuestionIndex}
            onSelectAnswer={handleAnsSelect}
            onSkipAnswer={handleSkipAnswer}
        />
    </div>
  );
}
