import Header from "./components/Header";
import Quiz from "./components/Quiz";
import QUESTIONS from "./questions"

function App() {

    return(
        <>
            <Header />
            <main>
                <Quiz questions={QUESTIONS}/>
            </main>
        </>
    );
}

export default App;
