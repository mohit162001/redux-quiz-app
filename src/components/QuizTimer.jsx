import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { userAction } from '../store/userAnsSlice';

let time =10000;
function QuizTimer() {
   const [remianTime,setRemainTime]= useState(time);
   const dispatch = useDispatch();
  
useEffect(()=>{
  const timer = setTimeout(()=>{
    dispatch(userAction.selectAnwer(null))
  },time)
  const interval = setInterval(()=>{
    setRemainTime(preTime=>preTime-100)
  },100)

  return ()=>{
    clearTimeout(timer);
    clearInterval(interval);
  }
},[dispatch])

  return (
    <progress value={remianTime} max={time}/>
  )
}

export default QuizTimer