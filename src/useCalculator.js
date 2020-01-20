import {useState} from 'react'

function useCalculaor() {

    const [currentOperandState, setCurrentOperandState] = useState('');
    const [prevOperandState, setPrevOperandState] = useState('');
    // const [operation, setOperation] = useState('');

    let currentOperands = '';
    let prevOperands = '';
    let operations = undefined;

    function clear(){
        currentOperands = '';
        prevOperands = '';
        operations = undefined;
        // setCurrentOperand('');
        // setPreviousOperand('');
        // setOperation('');
    }
    
    function screenDelete() {
        // setCurrentOperand(prevCurrentOperand => prevCurrentOperand.toString().slice(0, -1));
        currentOperands = currentOperands.toString().slice(0,-1);
    }

    function appendNumber(number) {
        if(number === '.' && currentOperands.includes('.')) 
            return;
        // setCurrentOperand(prevCurrentOperand => prevCurrentOperand.toString() + number.toString())
        currentOperands = currentOperands.toString() + number.toString();
        console.log(currentOperands + " I'm current oper")
        console.log(number + " im number")
    }

    function chooseOperation(operation) {
        if(currentOperands === '')
            return;
        if(prevOperands !== '')
            compute();
        // setOperation(operation);
        // setPreviousOperand(currentOperand);
        // setCurrentOperand('')
        operations = operation;
        prevOperands = currentOperands;
        currentOperands = '';
    }

    function compute() {
        let computation;
        const prev = parseFloat(prevOperands);
        const current = parseFloat(currentOperands);
        
        if(isNaN(prev) || isNaN(current)) 
            return;
        switch(operations) {
            case '+':
                computation = prev + current
                break
            case '-':
                computation = prev - current
                break
            case '*':
                computation = prev * current
                break
            case '÷':
                computation = prev / current
                break
            default:
                return
        }
        // setCurrentOperand(computation);
        // setOperation('');
        // setPreviousOperand('')
        currentOperands = computation;
        operations = undefined;
        prevOperands = '';
    }

    function getDisplayNumber(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay;
        if(isNaN(integerDigits)) {
            integerDisplay = '';
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0})
        }
        if(decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay
        }
    }

    function updateDiplay() {
        console.log(currentOperands);
        setCurrentOperandState(getDisplayNumber(currentOperands));
        if(operations != null) {
            setPrevOperandState(`${getDisplayNumber(prevOperands)} ${operations}`);
        } else {
            setPrevOperandState('');
        }
    }

    return {currentOperandState, prevOperandState, appendNumber, updateDiplay, compute, clear, screenDelete, chooseOperation}
}

export default useCalculaor;