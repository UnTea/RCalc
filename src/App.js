import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [result, setResult] = useState(0);
  const [input, setInput] = useState("");
  const [prevOperator, setPrevOperator] = useState("");
  const [prevNumber, setPrevNumber] = useState("");

  const handleNumberClick = (number) => {
    setInput(prevInput => prevInput + number);
  };

  const handleOperationClick = (operator) => {
    if (input === "") return;
    if (result === 0) {
      setResult(parseFloat(input));
    } else {
      setResult(prevResult => performOperation(prevResult, parseFloat(input), prevOperator));
    }
    setInput("");
    setPrevOperator(operator);
    setPrevNumber(input);
  };

  const handleClearClick = () => {
    setResult(0);
    setInput("");
    setPrevOperator("");
    setPrevNumber("");
  };

  const handleEqualsClick = () => {
    if (input === "") {
      setInput(prevInput => prevNumber);
    }
    setResult(prevResult => performOperation(prevResult, parseFloat(input || prevNumber), prevOperator));
    setInput("");
  };

  const handleDecimalClick = () => {
    if (input.includes(".")) return;
    setInput(prevInput => prevInput + ".");
  };

  const performOperation = (num1, num2, operator) => {
    switch (operator) {
      case "+":
        return num1 + num2;
      case "-":
        return num1 - num2;
      case "*":
        return num1 * num2;
      case "/":
        return num1 / num2;
      default:
        return num2;
    }
  };

  return (
    <div className="calculator">
      <h1>Calculator</h1>
      <div className="calculator-display">
        <input type="text" value={input || prevNumber} readOnly />
        <h2>{result}</h2>
      </div>
      <div className="calculator-buttons">
        <div className="calculator-row">
          <button className="calculator-button" onClick={() => handleClearClick()}>C</button>
          <button className="calculator-button" onClick={() => setPrevNumber(result)}>CE</button>
          <button className="calculator-button" onClick={() => handleOperationClick("/")}>÷</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-button" onClick={() => handleNumberClick("7")}>7</button>
          <button className="calculator-button" onClick={() => handleNumberClick("8")}>8</button>
          <button className="calculator-button" onClick={() => handleNumberClick("9")}>9</button>
          <button className="calculator-button" onClick={() => handleOperationClick("*")}>x</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-button" onClick={() => handleNumberClick("4")}>4</button>
          <button className="calculator-button" onClick={() => handleNumberClick("5")}>5</button>
          <button className="calculator-button" onClick={() => handleNumberClick("6")}>6</button>
          <button className="calculator-button" onClick={() => handleOperationClick("-")}>-</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-button" onClick={() => handleNumberClick("1")}>1</button>
          <button className="calculator-button" onClick={() => handleNumberClick("2")}>2</button>
          <button className="calculator-button" onClick={() => handleNumberClick("3")}>3</button>
          <button className="calculator-button" onClick={() => handleOperationClick("+")}>+</button>
        </div>
        <div className="calculator-row">
          <button className="calculator-button" onClick={() => handleNumberClick("0")}>0</button>
          <button className="calculator-button" onClick={() => handleDecimalClick()}>.</button>
          <button className="calculator-button" onClick={() => handleEqualsClick()}>=</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;

