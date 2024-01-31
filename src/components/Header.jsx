import React from 'react'
import quiz_logo from '../assets/quiz-logo.png'
function Header() {
  return (
    <header>
        <img src={quiz_logo} alt="logo" />
        <h1>React Redux Quiz App</h1>
    </header>
  )
}

export default Header;