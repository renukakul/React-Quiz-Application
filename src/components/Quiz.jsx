import { useCallback, useState } from "react";


import QUESTIONS from "../questions.js";


import Question from "./Question.jsx";
import Result from "./Result.jsx";



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
      <Result userAnswers={userAns}/>
     
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
