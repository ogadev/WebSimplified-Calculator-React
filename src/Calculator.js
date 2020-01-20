
class Calculator {
    constructor()
    {
        this.clear();
    }
    clear(){
        console.log("clear")
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
       
    }
    
    screenDelete() {
        console.log("screendelete")
        // setCurrentOperand(prevCurrentOperand => prevCurrentOperand.toString().slice(0, -1));
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
        console.log(this.currentOperand);

    }

    appendNumber(number) {
      
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = (this.currentOperand + "") + (number + "")
        console.log(this.currentOperand)
    }
    
    chooseOperation(operation) {
        if (this.currentOperand === '') return
        if (this.previousOperand !== '') {
            this.compute()
    }
        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }
    
    compute() {
    let computation
    const prev = parseFloat(this.previousOperand)
    const current = parseFloat(this.currentOperand)
    if (isNaN(prev) || isNaN(current)) return
    switch (this.operation) {
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
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }
    
    getDisplayNumber(number) {
        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        let prevOperandTextY
        let currentOperandTextY = this.getDisplayNumber(this.currentOperand);      
        if (this.operation != null) {
            prevOperandTextY = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            prevOperandTextY = '';
        }
        let result = {
            current: currentOperandTextY,
            prev: prevOperandTextY
        }
        return result;
    }   

     
}

export default Calculator;