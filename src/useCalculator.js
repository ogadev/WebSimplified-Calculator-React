import { useState } from 'react'

import Calculator from './Calculator';
const Calc = new Calculator();

function useCalculator() {
    const [currentOperandText, setCurrentOperandText] = useState('')
    const [prevOperandText, setPrevOperandText] = useState('')

    function updateScreen() {
        let {current, prev} = Calc.updateDisplay();
        setCurrentOperandText(current);
        setPrevOperandText(prev);
    }
    return {currentOperandText, prevOperandText, updateScreen, Calc}
}

export default useCalculator;
