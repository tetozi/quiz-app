import { useContext } from "react";
import Question from "./Question";
import {QuizContext} from '../contexts/quiz'
import { useState } from "react"




const Quiz = () => {
  const nextHandler = () => dispatch({ type: "NEXT_QUESTION"})
  const restartHandler = () => dispatch({ type: "RESTART" })
  const [quizState, dispatch] = useContext(QuizContext)
  const [value, setValue] = useState(0);

  

  return (
    <>
   
    <div className="quiz">
      {quizState.showResults && (
        <div className="results">
          <div className="congratulations">Congratulations!</div>
          <div className="results-info">
            <div>You have completed the quiz.</div>
            <div>
              You've got {quizState.correctAnswersCount} of &nbsp;
              {quizState.questions.length} right.
            </div>
          </div>
          <div
            onClick={restartHandler}
            className="next-button"
          >
            Restart
          </div>
        </div>
      )}
      {!quizState.showResults && (
        <div>
          <div className="score">
            Question {quizState.currentQuestionIndex + 1}/
            {quizState.questions.length}
          </div>
          <Question />
          {quizState.currentAnswer && (
            <div
              onClick={nextHandler}
              className="next-button"
            >
              Next question
            </div>
          )}
        </div>
      )}
    </div>
    </>
  );
};

export default Quiz;
