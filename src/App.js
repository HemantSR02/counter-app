import './App.css';
import { useState } from 'react';
function App() {

  const [Count, setCount] = useState(0);

  function up() {
    if (Count >= 20) {
      alert("No more Clicks")
      setCount(20)
    }
    else
      setCount(Count + 1);
  }

  function down() {
    if (Count <= 0) {
      alert("we don't want negatives")
      setCount(0)
    }
    else
      setCount(Count - 1);
  }


  return (
    <div className='App'>
      <div className='Counter'>
        <button className='first'onClick={up}>CountUp{Count}</button>
        <br></br>
        <br></br>
        <button className='first' onClick={down}>CountDown{Count}</button>
      </div>
    </div>


  );
}

export default App;
