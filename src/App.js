import React, { useState } from 'react';
import './styles.css';
import Calculator from './Calculator';


function App() {
  
  const [currentOperandText, setCurrentOperandText] = useState('')
  const [prevOperandText, setPrevOperandText] = useState('')

  const Calc = new Calculator();

  function updateScreen() {
    let [current, prev] = Calc.updateDisplay();
    console.log(current + " app curr");
    setCurrentOperandText(current);
    setPrevOperandText(prev);
  }
  

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{prevOperandText}</div>
        <div className="current-operand">{currentOperandText}</div>
      </div>
      <button className="span-two" onClick={()=> {Calc.clear(); updateScreen();}}>AC</button>
      <button onClick={() => {Calc.screenDelete()}}>DEL</button>
      <button onClick={() => {Calc.chooseOperation('÷')}}>÷</button>
      <button onClick={() => {Calc.appendNumber('1'); updateScreen()}}>1</button>
      <button onClick={() => {Calc.appendNumber('2')}}>2</button>
      <button onClick={() => {Calc.appendNumber('3')}}>3</button>
      <button onClick={() => {Calc.chooseOperation('*')}}>*</button>
      <button onClick={() => {Calc.appendNumber('4')}}>4</button>
      <button onClick={() => {Calc.appendNumber('5')}}>5</button>
      <button onClick={() => {Calc.appendNumber('6')}}>6</button>
      <button onClick={() => {Calc.chooseOperation('+')}}>+</button>
      <button onClick={() => {Calc.appendNumber('7')}}>7</button>
      <button onClick={() => {Calc.appendNumber('8')}}>8</button>
      <button onClick={() => {Calc.appendNumber('9')}}>9</button>
      <button onClick={() => {Calc.chooseOperation('-')}}>-</button>
      <button onClick={() => {Calc.appendNumber('.')}}>.</button>
      <button onClick={() => {Calc.appendNumber('0')}}>0</button>
      <button className="span-two">=</button>
    </div>
  );
}

export default App;
