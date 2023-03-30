import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function GoButton(props: any) {
  return (
    <div>
      <button onClick={props.blahClick}>Go!</button>
      <br></br>
    </div>
  );
}

function AmountOfGo(props: any) {
  return <label>{props.num}</label>;
}

function App() {
  const [count, setcount] = useState(0);

  return (
    <div>
      <GoButton blahClick={() => setcount(count + 1)} />
      <AmountOfGo num={count} />
    </div>
  );
}

export default App;
