import quizLogo from "../assets/quiz-logo.png"
export default function Header(){
    return (
        <header>
            <img src= {quizLogo} alt="quiz logo"/>
            <h1 id="headerh1">REACT QUIZ</h1>
        </header>
    );

}