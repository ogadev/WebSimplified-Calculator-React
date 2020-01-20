
class Calculator {
    constructor() {
        this.currentOperandText = ''
        this.prevOperandText = ''
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    clear(){
        console.log("clear")
        this.currentOperandText = ''
        this.prevOperandText = ''
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
        console.log(this.currentOperand)
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
        // console.log(this.getDisplayNumber(this.currentOperand) + "test")
        this.currentOperandText = this.getDisplayNumber(this.currentOperand);    
        // console.log(this.currentOperand + " currentOp");
        // console.log(this.currentOperandText + " currentOpeText");
       
        if (this.operation != null) {
            this.prevOperandText = `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`;
        } else {
            this.prevOperandText = '';
        }
        const curr = this.currentOperand;
        const prev = this.previousOperand;
        console.log(curr + " calcurt")

        return calc 
    }
     
}

export default Calculator;