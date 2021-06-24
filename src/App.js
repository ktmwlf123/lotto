import './App.css';
import MakeBall from './compornenets/MakeBall';
import DrawNum from './compornenets/DrawNum';
import React, { useState } from 'react'; 

function App() {
  const [lottoNum, setLottoNum] = useState([0,0,0,0,0,0,0]);

  const setLottoNumState = (data) => {
    setLottoNum(data)
  }

  return (
    <div>
      <div className="wrap">
        <MakeBall />
      </div>
      <DrawNum lottoNum={lottoNum} setLottoNumState={setLottoNumState}/>
    </div>
  );
}

export default App;
