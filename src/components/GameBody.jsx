import React, { useEffect, useState } from 'react'

import data from '../data'
import '../css/gamebody.css'
import '../css/mediaQuery.css'


const GameBody = ({ onClickedFruits }) => {

  return (
    <div className='game__card-wrapper'>
      {data.map((fruit) => {
        return (
          <div className='game__card' key={fruit.id} onClick={(e) => onClickedFruits(e, fruit.id)}>
            <img src={fruit.src} alt={fruit.name} />
            <p>{fruit.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default GameBody