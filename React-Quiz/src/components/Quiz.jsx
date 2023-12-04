import { useCallback, useState } from "react";
import QUESTIONS from "../questions.js";
import QUIZCOMPLETELOGO from "/Users/renukakulkarni/Work/ReactAllProjects/React-Quiz-Application/React-Quiz/src/assets/quiz-complete.png";
import Timer from "./Timer.jsx";

const TIMER = 60000;

export default function Quiz() {
  const [answerState, setAnswerSate] = useState("");
  const [userAns, setUserAns] = useState([]);

  const currentQuestionIndex = (answerState === '' ? userAns.length : userAns.length-1);
  const quizComplete = currentQuestionIndex === QUESTIONS.length;

  const handleAnsSelect = useCallback(function handleAnsButton(selectedAnswer) {
    setAnswerSate("answered");
    setUserAns((prevUserAns) => {
      return [...prevUserAns, selectedAnswer];
    });

    setTimeout(() => {
      if (selectedAnswer === QUESTIONS[currentQuestionIndex].answers[0]) {
        setAnswerSate("correct");
      } else {
        setAnswerSate("wrong");
      }

      setTimeout(() => {
        setAnswerSate('');
      },2000)
    }, 1000);

    
  }, [currentQuestionIndex]);

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
      <div id="question">
        <Timer
          key={currentQuestionIndex
}
          timeout={TIMER}
          onTimeout={handleSkipAnswer}
        />
        <h2>{QUESTIONS[currentQuestionIndex
].text}</h2>
        <ol id="answers">
          {QUESTIONS[currentQuestionIndex
    ].answers.map((ans) => {
        const isSelected =userAns[userAns.length - 1] === ans;
        let cssClass ='';

        if ((answerState === 'correct' || answerState === 'wrong') && isSelected){
            cssClass = answerState;
        }

            return (
            <li key={ans} className="answer">
              <button onClick={() => handleAnsSelect(ans)} className={cssClass}>{ans}</button>
            </li>
          )})}
        </ol>
      </div>
      <Timer timer={TIMER} />
    </div>
  );
}
