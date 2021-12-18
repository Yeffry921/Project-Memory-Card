import React, { useState, useEffect } from "react";

import Header from "./Header"
import GameBody from "./GameBody";
import data from '../data'

const FruitApp = () => {

  const [score, setScore] = useState(0)
  const [highScore, setHighScore] = useState(0)
  const [fruitsClicked, setFruits] = useState([])
  const [fruitData, setFruitData] = useState(data)

  useEffect(()=> {
    const shuffleArray = (array) => {
      return array.sort(() => Math.random() - 0.5);
    }

    const shuffledFruits = shuffleArray(data)
    setFruitData(shuffledFruits)

  }, [fruitsClicked])

  const clickedFruits = (event, id) => {
    if(fruitsClicked.includes(id)) {
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
    if(score > highScore) {
      setHighScore(score)
    }
  }

  return(
    <React.Fragment>
      <Header gameScoreData={score} highScoreData={highScore}/>
      <GameBody 
        onClickedFruits={clickedFruits}
        onAddToScore={addToScore}
        onResetScore={resetScore}
        onPlaceHighScore={placeHighScore}
        fruitDataState={fruitData}
      />
    </React.Fragment>
  )
}

export default FruitApp