import React from "react";
import Quiz_over from "../assets/quiz-complete.png";
import QUESTIONS from "../question.js";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/userAnsSlice.js";

function Summary({ userAnswer, setUserAnswer }) {

  const userAnswers = useSelector(state=>state.userAns.userAnsweres)

  const dispatch = useDispatch();
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );

  const skippedPercent = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const correctPercent = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const wrongPercent = 100 - skippedPercent - correctPercent;
  
  function handleRestart(){
    dispatch(userAction.restart())
  }
  return (
    <div id="summary">
      <img src={Quiz_over} alt="Trophy" />
      <h2>QUIZ COMPLETED</h2>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedPercent}%</span>
          <span className="text">Skipped</span>
        </p>
        <p>
          <span className="number">{correctPercent}%</span>
          <span className="text">Correct</span>
        </p>
        <p>
          <span className="number">{wrongPercent}%</span>
          <span className="text">Wrong</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === null) {
            cssClass += " skipped";
          } else if (answer === QUESTIONS[index].answers[0]) {
            cssClass += " correct";
          } else {
            cssClass += " wrong";
          }
          return (
            <li key={index}>
              <h2>{index + 1}</h2>
              <p className="quetion">{QUESTIONS[index].text}</p>
              <p className={cssClass}>
                {answer === null ? "No answer were picked" : `${answer}`}
              </p>
              {answer!==QUESTIONS[index].answers[0]?<p className='user-answer correct'> CORRECT: {QUESTIONS[index].answers[0]}</p>:''}
            </li>
          );
        })}
      </ol>
      <button id="retry-btn" onClick={handleRestart}>RETRY</button>
    </div>
  );
}

export default Summary;
