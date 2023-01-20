import { useState } from 'react'

import RatingCard from './components/RatingCard/RatingCard'
import ThankCard from './components/ThankCard/ThankCard'
import './App.css'

const App = () => {
  const [submit, setSubmit] = useState(false);
  const [option, setOption] = useState(0);

  return (
    <div className='app'>
      { (submit === false) 
        ? <RatingCard
            setSubmit={setSubmit}
            option={option}
            setOption={setOption}
          />
        : <ThankCard
            setSubmit={setSubmit}
            option={option}
            setOption={setOption}
          /> 
      }
    </div>
  )
}

export default App;