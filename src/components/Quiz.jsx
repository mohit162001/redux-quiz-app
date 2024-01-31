// import React, { useState } from "react";
import QUESTIONS from "../question.js";
import QuizTimer from "./QuizTimer.jsx";
import Summary from "./Summary.jsx";
import StartModal from "./StartModal.jsx";
import { useDispatch, useSelector } from "react-redux";
import { userAction } from "../store/userAnsSlice.js";

function Quiz() {

  const isModal = useSelector((state) => state.modal.isModal);
  const userAnswers = useSelector((state) => state.userAns.userAnsweres);
  const dispatch = useDispatch();
  const activeQuetion = userAnswers.length;

  const quizOver = activeQuetion === QUESTIONS.length;

  // const [userAnswer,setUserAnswer] = useState([]);

  // const [Modal,setModal] = useState(true);

  // function handleModal(){
  //     setModal(false);
  // }
  // function handleSelectAns(selectedAns){
  //     setUserAnswer((preAnswer)=>{
  //         return [...preAnswer,selectedAns];
  //     })
  // }

  function handleSelectAns(answer) {
    dispatch(
      userAction.selectAnwer(answer)
    );
  }

  console.log("redux answer", userAnswers);

  if (quizOver) {
    return <Summary/>;
  }
  const shuffledAnswer = [...QUESTIONS[activeQuetion].answers];
  shuffledAnswer.sort();
  const correct = userAnswers.filter((answer, index) => {
    return answer === QUESTIONS[index].answers[0];
  });
  console.log('correct',correct)

  return (
    <>
      <div id="modal">{isModal ? <StartModal/> : ""}</div>
      <div id="quiz">
        {isModal === false ? (
          <QuizTimer
            key={activeQuetion}
          />
        ) : (
          ""
        )}
        <p id="score-p">
          Score:{correct.length}/{QUESTIONS.length}
        </p>

        <h2>
          <span>{activeQuetion + 1}: </span>
          {QUESTIONS[activeQuetion].text}
        </h2>
        <ul id="answers">
          {shuffledAnswer.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAns(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Quiz;
