import data from '../data'
import '../css/gamebody.css'

const GameBody = () => {
  return (
    <div className='game__card-wrapper'>
      {data.map((fruit) => {
        return (
          <div className='game__card' key={fruit.id}>
            <img src={fruit.src} alt={fruit.name} />
            <p>{fruit.name}</p>
          </div>
        )
      })}
    </div>
  )
}

export default GameBody