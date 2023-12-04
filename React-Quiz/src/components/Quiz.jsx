import { useCallback, useState } from 'react';
import QUESTIONS from '../questions.js'
import QUIZCOMPLETELOGO from '/Users/renukakulkarni/Work/ReactAllProjects/React-Quiz-Application/React-Quiz/src/assets/quiz-complete.png'
import Timer from './Timer.jsx';


const TIMER = 60000;

export default function Quiz(){
    const [userAns, setUserAns] = useState([]);
    
    const currentQuestion = userAns.length;
    const quizComplete = currentQuestion === QUESTIONS.length;
    
    const handleAnsSelect =  useCallback(function handleAnsButton(selectedAnswer){
        setUserAns((prevUserAns) => {
            return [...prevUserAns, selectedAnswer];
        });
    },[]);

    const handleSkipAnswer = useCallback(() => handleAnsSelect(null), [handleAnsSelect]);


    if (quizComplete){
        return(
            <div id='summary'>
                <img src = {QUIZCOMPLETELOGO} alt="Trophy" />
                <h2>Quiz Completed !</h2>
            </div>
        );
    }

    return(
        <div id="quiz">
            <div id="question">
                <Timer key={currentQuestion} timeout={TIMER} onTimeout={handleSkipAnswer}  />
                <h2>{QUESTIONS[currentQuestion].text}</h2>
                <ol id="answers">
                    {QUESTIONS[currentQuestion].answers.map((ans) => (
                        <li key={ans} className='answer'>
                            <button onClick={() => handleAnsSelect(ans)}>{ans}</button>
                        </li>
                    ))}
                </ol>            
            </div>
            <Timer timer={TIMER} />              
        </div>
    );
}