import React from "react";
import '../css/header.css'

const Header = () => {
  return (
    <header>
      <div className="header__title-wrapper">
        <h1>Fruit Memory Game</h1>
      </div>
      <div className="header__scores-wrapper">
        <span>Score: {0}</span>
        <span>Highest Score: {0}</span>
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