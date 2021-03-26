function myFunction() {
    elem = document.getElementsByClassName("dropdown-content")[0]
    elem1 = document.getElementById("dropbtn")
    state = elem.style.opacity
    state1 = elem.style.height
    state2 = elem1.style.transform

    if (state == '1') elem.style.opacity = '0'
    else elem.style.opacity = '1'

    if (state1 == '470px') elem.style.height = '0'
    else elem.style.height = '470px'

    if (state2 == 'rotate(' + 180 + 'deg)') elem1.style.transform = 'none'
    else elem1.style.transform = 'rotate(' + 180 + 'deg)'
}

dropbtn.addEventListener('click', myFunction)

class Calculator {
    constructor(previousOperandTextElement, currentOperandTextElement) {
        this.previousOperandTextElement = previousOperandTextElement
        this.currentOperandTextElement = currentOperandTextElement
        this.reset = false
        this.clear()
    }

    clear() {
        this.currentOperand = ''
        this.previousOperand = ''
        this.operation = undefined
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1)
    }

    appendNumber(number) {
        if (number === '.' && this.currentOperand.includes('.')) return
        this.currentOperand = this.currentOperand.toString() + number.toString()
    }

    chooseOperation(operation) {
        if (this.currentOperand === '' && this.previousOperand !== '') {
            this.operation = operation
        }

        if (operation === '±') {
            this.currentOperand = -1 * this.currentOperand
            return
        }

        if (this.currentOperand === '') return

        if (this.previousOperand !== '') {
            this.compute()
        }

        this.operation = operation
        this.previousOperand = this.currentOperand
        this.currentOperand = ''
    }

    chooseSqrtOperation(operation) {
        let com

        if (this.currentOperand === '' && this.previousOperand !== '') {
            this.operation = operation
            this.currentOperand = this.previousOperand
        }

        if (this.currentOperand === '') return

        if (this.currentOperand !== '') {
            com = this.currentOperand
            this.operation = operation
            this.computeSqrt()
        }

        this.operation = operation
        this.previousOperand = com
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
                if (prev / current === Infinity || prev / current === -Infinity) {
                    computation = ' Incorrect actions'
                } else {
                    computation = prev / current
                }
                break
            case '^':
                computation = prev ** current;
                break
            default:
                return
        }

        if (!isNaN(computation)) {
            computation = Number(computation.toFixed(10))
        }

        this.reset = true
        this.currentOperand = computation
        this.operation = undefined
        this.previousOperand = ''
    }

    computeSqrt() {
        let computation
        const current = parseFloat(this.currentOperand)

        if (isNaN(current)) return

        if (current < 0 && this.operation === '√') {
            this.currentOperand = ' Incorrect actions'
        } else {
            switch (this.operation) {
                case '√':
                    computation = current ** (1 / 2)
                    break
                default:
                    return
            }

            if (!isNaN(computation)) {
                computation = Number(computation.toFixed(10))
            }

            this.currentOperand = computation
        }
        this.reset = true
        this.operation = undefined
        this.previousOperand = ''
    }

    getDisplayNumber(number) {
        if (number === ' Incorrect actions') {
            return number
        }

        const stringNumber = number.toString()
        const integerDigits = parseFloat(stringNumber.split('.')[0])
        const decimalDigits = stringNumber.split('.')[1]
        let integerDisplay

        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', {
                maximumFractionDigits: 0
            })
        }

        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`
        } else {
            return integerDisplay
        }
    }

    updateDisplay() {
        this.currentOperandTextElement.innerText = this.getDisplayNumber(this.currentOperand)

        if (this.currentOperand === ' Incorrect actions') {
            this.currentOperand = ''
            this.previousOperand = ''
            this.operation = undefined
        }

        if (this.operation != null && this.operation !== '√') {
            this.previousOperandTextElement.innerText =
                `${this.getDisplayNumber(this.previousOperand)} ${this.operation}`
        } else if (this.operation === '√') {
            this.previousOperandTextElement.innerText =
                `√${this.getDisplayNumber(this.previousOperand)}`
        } else {
            this.previousOperandTextElement.innerText = ''
        }
    }
}


const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const operationSqrtButton = document.querySelectorAll('[data-operation-sqrt]')
const equalsButton = document.querySelector('[data-equals]')
const deleteButton = document.querySelector('[data-delete]')
const allClearButton = document.querySelector('[data-all-clear]')
const previousOperandTextElement = document.querySelector('[data-previous-operand]')
const currentOperandTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTextElement, currentOperandTextElement)

numberButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (calculator.currentOperand !== '' && calculator.reset) {
            calculator.currentOperand = ''
            calculator.previousOperand = ''
            calculator.operation = undefined
        }

        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
        calculator.reset = false
    })
})

operationButtons.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseOperation(button.innerText)
        calculator.updateDisplay()
    })
})

operationSqrtButton.forEach(button => {
    button.addEventListener('click', () => {
        calculator.chooseSqrtOperation(button.innerText)
        calculator.updateDisplay()
    })
})

equalsButton.addEventListener('click', button => {
    calculator.compute()
    calculator.updateDisplay()
})

allClearButton.addEventListener('click', button => {
    calculator.clear()
    calculator.updateDisplay()
})

deleteButton.addEventListener('click', button => {
    calculator.delete()
    calculator.updateDisplay()
})