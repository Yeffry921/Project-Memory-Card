import React from "react";
import '../css/header.css'

const Header = ({ gameScoreData, highScoreData }) => {
  return (
    <header>
      <div className="header__title-wrapper">
        <h1>Fruit Memory Game</h1>
      </div>
      <div className="header__scores-wrapper">
        <span>Score: {gameScoreData}</span>
        <span>Highest Score: {highScoreData}</span>
      </div>
      <div className="header__description-wrapper">
        <p>You are presented with multiple images of fruits.
          You cannot click on any image more than once or you lose.
          Good Luck
        </p>
      </div>
    </header>
  )
}

export default Header