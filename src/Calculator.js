import React, { useState } from "react";

function Calculator() {
  const [preInput, setPreInput] = useState(null);
  const [curInput, , setCurInput] = useState("0");
  const [operator, setOperator] = useState(null);

  const handleDigit = (digit) =>
    digit === "0" ? String(digit) : curInput + digit;
  const handleOperator = (op) => {
    if (!preInput) {
      setPreInput(curInput);
      setCurInput("0");
    } else if (operator) {
      const result = calculate();
      setPreInput(null);
      setCurInput(result);
    }
    setOperator(op);
  };
  const calculate = () => {
    const preVal = parseFloat(preInput);
    const curVal = parseFloat(curInput);
    if (isNaN(curVal) || isNaN(preVal)) return "";
    let calculation = "";
    switch (operator) {
      case "+":
        calculation = preVal + curVal;
        break;
      case "-":
        calculation = preVal - curVal;
        break;
      case "*":
        calculation = preVal * curVal;
        break;
      case "/":
        calculation = preVal / curVal;
        break;
      default:
        return "";
    }
    return calculation.toString();
  };
  const handleResult = () => {
    const result = calculate();
    setPreInput(null);
    setCurInput(result);
    setOperator(null);
  };
  const handleClear = () => {
    setPreInput(null);
    setCurInput("0");
    setOperator(null);
  };

  return (
    <div>
      <div>
        <div>pre: {preInput}</div>
        <div>cur: {curInput}</div>
      </div>
      <div className="">
        <button onClick={() => handleDigit(1)}>1</button>
        <button onClick={() => handleDigit(2)}>2</button>
        <button onClick={() => handleDigit(3)}>3</button>
        <button onClick={() => handleOperator("+")}>+</button>
        <button onClick={() => handleOperator("-")}>-</button>
        <button onClick={() => handleDigit(4)}>4</button>
        <button onClick={() => handleDigit(5)}>5</button>
        <button onClick={() => handleDigit(6)}>6</button>
        <button onClick={() => handleOperator("*")}>*</button>
        <button onClick={() => handleOperator("/")}>/</button>
        <button onClick={() => handleDigit(7)}>7</button>
        <button onClick={() => handleDigit(8)}>8</button>
        <button onClick={() => handleDigit(9)}>9</button>
        <button onClick={() => handleResult()}>=</button>
        <button onClick={() => handleClear()}>C</button>
      </div>
    </div>
  );
}

export default Calculator;
