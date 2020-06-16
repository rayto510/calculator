import React, { useState } from 'react'

export default function Calculator() {
    const [displayNumber, setDisplayNumber] = useState("0")
    const [secondaryNumber, setSecondaryNumber] = useState(null)
    const [operator, setOperator] = useState(null)
    const [isNewNumber, setIsNewNumber] = useState(true)

    const pressOperator = (operator) => {
        setSecondaryNumber(displayNumber)
        setOperator(operator)
        setIsNewNumber(true)
    }

    const clear = () => {
        setDisplayNumber("0")
        setSecondaryNumber(null)
        setOperator(null)
        setIsNewNumber(true)
    }

    const calculate = () => {
        switch(operator) {
            case "+":
                setDisplayNumber(`${parseInt(displayNumber) + parseInt(secondaryNumber)}`)
                break
            case "-":
                setDisplayNumber(`${parseInt(secondaryNumber) - parseInt(displayNumber)}`)
                break
            case "*":
                setDisplayNumber(`${parseInt(displayNumber) * parseInt(secondaryNumber)}`)
                break
            case "/":
                setDisplayNumber(`${parseInt(secondaryNumber) / parseInt(displayNumber)}`)
                break
        }
        setIsNewNumber(true)
    }

    const pressNumber = (number) => {
        if (isNewNumber) {
            setDisplayNumber(number)
        } else {
            setDisplayNumber(displayNumber + number)
        }
        setIsNewNumber(false)
    }
    
    return (
        <div>
            <p data-testid="display">{displayNumber}</p>

            <button id="zero" onClick={() => pressNumber("0")}>0</button>
            <button id="one" onClick={() => pressNumber("1")}>1</button>
            <button id="two" onClick={() => pressNumber("2")}>2</button>
            <button id="three" onClick={() => pressNumber("3")}>3</button>
            <button id="four" onClick={() => pressNumber("4")}>4</button>
            <button id="five" onClick={() => pressNumber("5")}>5</button>
            <button id="six" onClick={() => pressNumber("6")}>6</button>
            <button id="seven" onClick={() => pressNumber("7")}>7</button>
            <button id="eight" onClick={() => pressNumber("8")}>8</button>
            <button id="nine" onClick={() => pressNumber("9")}>9</button>

            <button id="add" onClick={() => pressOperator("+")}>+</button>
            <button id="subtract" onClick={() => pressOperator("-")}>-</button>
            <button id="multiply" onClick={() => pressOperator("*")}>*</button>
            <button id="divide" onClick={() => pressOperator("/")}>/</button>

            <button id="clear" onClick={clear}>AC</button>
            <button id="decimal">.</button>

            <button id="equals" onClick={calculate}>=</button>
        </div>
    )
}
