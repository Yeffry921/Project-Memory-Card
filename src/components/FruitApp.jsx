import React, { useState, useEffect } from "react";

import Header from "./Header"
import GameBody from "./GameBody";

const FruitApp = () => {

  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [fruits, setFruits] = useState([])

  const clickedFruits = (event, id) => {
    if(fruits.includes(id)) {
      // If you click on 
      resetScore()
      placeHighScore()
      setFruits([])
      return;
    }

    // Game continues
    setFruits((prevState) => {
      return [...prevState, id]
    })
    addToScore()
  }

  const addToScore = () => {
    setScore(score + 1)
  }

  const resetScore = () => {
    setScore(0)
  }

  const placeHighScore = () => {
    setHighScore(score)
  }

  console.log(fruits)
  return(
    <React.Fragment>
      <Header gameScoreData={score} highScoreData={highScore}/>
      <GameBody 
        onClickedFruits={clickedFruits}
        onAddToScore={addToScore}
        onResetScore={resetScore}
        onPlaceHighScore={placeHighScore}
      />
    </React.Fragment>
  )
}

export default FruitApp