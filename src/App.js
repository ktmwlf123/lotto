import './App.css';
import MakeBall from './compornenets/MakeBall';
import DrawNum from './compornenets/DrawNum';
import React, { useState } from 'react'; 

function App() {
  const [lottoNum, setLottoNum] = useState({balls:[0,0,0,0,0,0], bonus:0});

  const setLottoNumState = (data) => {
    setLottoNum(data)
  }

  return (
    <div>
      <div className="wrap">
        <MakeBall lottoNum={lottoNum}/>
      </div>
      <DrawNum setLottoNumState={setLottoNumState}/>
    </div>
  );
}

export default App;
