import { useState } from 'react';
import QUESTIONS from '../questions.js'

export default function Quiz(){
    const [userAns, setUserAns] = useState([])
    
    const currentQuestion = userAns.length;

    function handleAnsButton(selectedAnswer){
        setUserAns((prevUserAns) => {
            return [...prevUserAns, selectedAnswer];
        });
    }




    return(
        <div id="quiz">
            <div id="question">
                <h2>{QUESTIONS[currentQuestion].text}</h2>
                <ol id="answers">
                    {QUESTIONS[currentQuestion].answers.map((ans) => (
                        <li key={ans} className='answer'>
                            <button onClick={() => handleAnsButton(ans)}>{ans}</button>
                        </li>
                    ))}
                </ol>            
            
            </div>

        </div>
    );
}