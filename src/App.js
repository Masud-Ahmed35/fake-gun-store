
import { useState } from 'react';
import './App.css';
import AllGuns from './components/AllGuns/AllGuns';
import NavBar from './components/navbar/NavBar';

function App() {

  const [count, setCount] = useState(0);

  const countIncrease = () => {
    setCount(count + 1)
  }

  return (
    <div className="App">
      <NavBar count={count}></NavBar>
      <AllGuns countIncrease={countIncrease}></AllGuns>
    </div>
  );
}

export default App;
