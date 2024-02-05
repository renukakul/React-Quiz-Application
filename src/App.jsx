import { useState } from "react";
import Header from "./components/Header";
import Quiz from "./components/Quiz";
import Start from "./components/Start";
function App() {
    const [quizStarted, setQuizStarted] = useState(false);

    const starttQuiz = () => {
        setQuizStarted(true);
    };

    return(
        <>
            <Header />
            <main>
            {!quizStarted ? (
            <Start onStart={starttQuiz}/>
        ) : (
          <Quiz />
        )}
            </main>
        </>
    );
}

export default App;
