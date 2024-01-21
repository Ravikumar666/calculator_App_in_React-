import React, { useState } from 'react';
import './App.css';
import Keypad from './keypad';

function App() {
  let [input, update] = useState('');

  function onClickEvent(value) {
    update(input + value);
  }

  function funckey(value) {
    if (value === 'c') {
      update('');
    } else {
      let outputval = eval(input);
      update(outputval);
    }
  }
  return (
    <React.Fragment>
      <div className="container">
        <h1>Calculater App</h1>
        <div className="calculater">
          <input type="text" value={input} readOnly className="output" />
          <Keypad onClickEvent={onClickEvent} funckey={funckey}></Keypad>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
