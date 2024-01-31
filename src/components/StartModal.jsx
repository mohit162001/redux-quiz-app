import React from "react";
import './startmodal.css'
import { useDispatch } from "react-redux";
import { modalAction } from "../store/modal-slice";
function StartModal() {
  const dispatch = useDispatch()

  function handleModal(){
    dispatch(modalAction.showModal())
  }
  
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h1>Start the Test</h1>
        <button className="modal-btn" onClick={handleModal}>Start</button>
      </div>
    </div>
  );
}

export default StartModal;
