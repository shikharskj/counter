import React, {useState} from 'react'

function App() {

  const [count, setCount] = useState(0);

  const handleBtnClick = (type) => {
      if(type === '+') {
        setCount(prevCount => prevCount + 1)
      } else if(type === '-' && count > 0) {
        setCount(prevCount => prevCount - 1)
      }        
  }

  return (
    <div className="App">
      <h2>Counter</h2>
        <button className='inc-btn'
        onClick={() => handleBtnClick('+')}
        > + </button>
      <div className='counter-val'>
        <h1> {count} </h1>
      </div>
        <button className='dec-btn' onClick={() => handleBtnClick('-')}> - </button>
    </div>
  );
}

export default App;
