# React-Quiz-Application

Dynamic and user-friendly quiz application built with React

https://github.com/renukakul/React-Quiz-Application/assets/135245268/24808b5f-a14f-42bc-a19e-9afdd56ca419

# Project OverView
The React Quiz Application is designed to provide an interactive and engaging platform for users. The primary goal is to create an enjoyable experience that not only challenges users with insightful questions but also provides a detailed summary of their performance at the end.

1. **User-Friendly Interface:**
   
    Intuitive design for a seamless and enjoyable user experience.
3. **Question Navigation:**
   
    Navigate through a series of thought-provoking questions.
4. **Multiple Choice Answers:**
   
    Answer questions by selecting from multiple-choice options.
5. **Timer:**
   
   A countdown timer for each question to add an element of urgency.
6. **Instant Feedback:**
   
    Receive immediate feedback on correct and incorrect answers.
7. **Summary at the End:**
   
    Comprehensive summary displaying the total score, correct and incorrect answers, and the time taken.
8. **Skill Level and Time Information:**
   
    Informative details about the quiz, such as the number of questions, skill level (e.g., beginner), and estimated time.

# Project Structure
The project Follows Modular structure with key Components-
- Header Component:
  - Displays the quiz logo and title.
- Start Component:
  - Initiates the quiz and provides essential information.
- Question Component :
  - Responsible for presenting a single question to the user. 
  - It manages the state of the user's selected answer, provides a timer for each question, and handles the logic related to user interactions and feedback.
- Answer Component:
  - Responsible for rendering and managing the display of answer options for a given question in a quiz application. 
  - It supports shuffling the order of answer options and provides visual feedback based on the user's interaction and the correctness of their answer.
- Quiz Component :
  - Quiz component forms the core of the quiz application, orchestrating the flow and interactions between individual questions and the final result summary.
- Timer Component-
  - The QuestionTimer component is responsible for managing and displaying a countdown timer for each question in a quiz. 
  - It utilizes the React Hooks useState and useEffect to handle the timer logic.
- Result Component-
  - he Summary component is responsible for rendering the summary of a completed quiz. 
  - It displays statistics on skipped, correct, and incorrect answers, along with a detailed breakdown of each question, the user's answer, and the correct answer.



# Installation and Usage
Prerequisites - npm should be installed on the machine

To Start Frontend React Website
```bash
    npm install
    npm run dev
```

# License
This project is licensed under the MIT License.