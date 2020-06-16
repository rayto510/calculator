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
            default:
                break
        }
        setIsNewNumber(true)
    }

    const pressNumber = (number) => {
        if (isNewNumber && number !== '.') {
            setDisplayNumber(number)
        } else {
            if (number === '.' && displayNumber.includes('.')) {
                return
            }
            setDisplayNumber(displayNumber + number)
        }
        setIsNewNumber(false)
    }

    const keyStyle = {
        display: 'grid',
        gridTemplateColumns: '125px 125px 125px 125px',
        gridTemplateRows: '75px 75px 75px 75px 75px',
    }

    const equalStyle = {
        gridColumnStart: 4,
        gridRowStart: 2,
        gridRowEnd: 6,
        backgroundColor: 'orange'
    }

    const numStyle = {
        backgroundColor: 'white',
        borderWidth: '1px'
    }

    const opStyle = {
        backgroundColor: 'light-grey',
        borderWidth: '1px'
    }

    const calculatorStyle = {
        top: '50%',
        left: '50%',
        position: 'absolute',
        transform: 'translate(-50%, -50%)',
        width: '500px',
        fontFamily: 'Helvetica',
    }

    const displayStyle = {
        fontSize: '40px',
        textAlign: 'right',
        color: 'white',
        backgroundColor: 'black',
        height: '80px',
        paddingTop: '30px',
        paddingRight: '30px',
    }
    
    return (
        <div style={calculatorStyle}>
            <div data-testid="display" style={displayStyle}>{displayNumber}</div>

            <div style={keyStyle}>
                <button id="add" style={opStyle} onClick={() => pressOperator("+")}>+</button>
                <button id="subtract" style={opStyle} onClick={() => pressOperator("-")}>-</button>
                <button id="multiply" style={opStyle} onClick={() => pressOperator("*")}>x</button>
                <button id="divide" style={opStyle} onClick={() => pressOperator("/")}>÷</button>

                <button id="seven" style={numStyle} onClick={() => pressNumber("7")}>7</button>
                <button id="eight" style={numStyle} onClick={() => pressNumber("8")}>8</button>
                <button id="nine" style={numStyle} onClick={() => pressNumber("9")}>9</button>
                <button id="four" style={numStyle} onClick={() => pressNumber("4")}>4</button>
                <button id="five" style={numStyle} onClick={() => pressNumber("5")}>5</button>
                <button id="six" style={numStyle} onClick={() => pressNumber("6")}>6</button>
                <button id="one" style={numStyle} onClick={() => pressNumber("1")}>1</button>
                <button id="two" style={numStyle} onClick={() => pressNumber("2")}>2</button>
                <button id="three" style={numStyle} onClick={() => pressNumber("3")}>3</button>
                <button id="zero" style={numStyle} onClick={() => pressNumber("0")}>0</button>

                <button id="decimal" style={numStyle} onClick={() => pressNumber(".")}>.</button>
                <button id="clear" style={numStyle} onClick={clear}>AC</button>
                <button id="equals" style={equalStyle} onClick={calculate}>=</button>
            </div>
        </div>
    )
}
