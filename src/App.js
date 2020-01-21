import React, { useState } from 'react';
import './styles.css';
import useCalculator from './useCalculator'
function App() {
  
  const {currentOperandText, prevOperandText, updateScreen, Calc} = useCalculator();
 
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{prevOperandText}</div>
        <div className="current-operand">{currentOperandText}</div>
      </div>
      <button className="span-two" onClick={()=> {Calc.clear(); updateScreen();}}>AC</button>
      <button onClick={() => {Calc.screenDelete(); updateScreen()}}>DEL</button>
      <button onClick={() => {Calc.chooseOperation('÷'); updateScreen();}}>÷</button>
      <button onClick={() => {Calc.appendNumber('1'); updateScreen()}}>1</button>
      <button onClick={() => {Calc.appendNumber('2'); updateScreen();;}}>2</button>
      <button onClick={() => {Calc.appendNumber('3'); updateScreen()}}>3</button>
      <button onClick={() => {Calc.chooseOperation('*'); updateScreen()}}>*</button>
      <button onClick={() => {Calc.appendNumber('4'); updateScreen();}}>4</button>
      <button onClick={() => {Calc.appendNumber('5'); updateScreen();}}>5</button>
      <button onClick={() => {Calc.appendNumber('6'); updateScreen();}}>6</button>
      <button onClick={() => {Calc.chooseOperation('+'); updateScreen();}}>+</button>
      <button onClick={() => {Calc.appendNumber('7'); updateScreen();}}>7</button>
      <button onClick={() => {Calc.appendNumber('8'); updateScreen();}}>8</button>
      <button onClick={() => {Calc.appendNumber('9'); updateScreen();}}>9</button>
      <button onClick={() => {Calc.chooseOperation('-'); updateScreen()}}>-</button>
      <button onClick={() => {Calc.appendNumber('.'); updateScreen();}}>.</button>
      <button onClick={() => {Calc.appendNumber('0'); updateScreen();}}>0</button>
      <button className="span-two" onClick={() => {Calc.compute(); updateScreen();}}>=</button>
    </div>
  );
}

export default App;
