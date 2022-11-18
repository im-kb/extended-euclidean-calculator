function buttonClick() {
    document.getElementById("result").innerHTML = ""
    const numberA = document.getElementById("number-A").value
    const numberB = document.getElementById("number-B").value
    const numberC = document.getElementById("number-C").value

    const inputValidator = new InputValidator(numberA, numberB, numberC)
    if (inputValidator.valid) {
        const aInt = parseInt(numberA, 10)
        const bInt = parseInt(numberB, 10)
        const cInt = parseInt(numberC, 10)
        showResultOnPage(aInt, bInt, cInt)
    } else {
        showErrorMessage(inputValidator.errorMsg)
    }
}

class InputValidator {
    #num1 = ''
    #num2 = ''
    #num3 = ''

    constructor(num1, num2, num3) {
        this.#num1 = num1
        this.#num2 = num2
        this.#num3 = num3
        this.valid = false
        this.errorMsg = ""
        this.#validate()
    }

    #isInteger() {
        const reg = /^[-]?\d+$/;
        return reg.test(this.#num1) && reg.test(this.#num2) && reg.test(this.#num3)
    }

    #validate() {
        if (!this.#isInteger()) // Check if both inputs are Integers
            this.errorMsg = "Incorrect data"
        else if (this.#num1 < 1 || this.#num2 < 1 || this.#num3 < 1) // Check if numbers are greater than 0
            this.errorMsg = "Numbers must be greater than 0"
        else // Mark the input as valid
            this.valid = true
    }
}

function showErrorMessage(msg) {
    document.getElementById("equation").innerText = msg
}

function showResultOnPage(a, b, c) {
    const result = getGCDForThree(a, b, c)
    const x = result.x
    const y = result.y
    const z = result.z
    const gcd = result.gcd

    displayEquation(a, b, c, x, y, z, gcd)
}

function displayEquation(numberA, numberB, numberC, x, y, z, result) {
    document.getElementById("equation").innerHTML =
        "(" + numberA + ", " + numberB + ", " + numberC + ") = " +
        "<strong>" + numberA + "</strong>・" + x + " + "
        + "<strong>" + numberB + "</strong>" + "・" + y + " + "
        + "<strong>" + numberC + "</strong>" + "・" + z +
        "</strong> = " + result
}