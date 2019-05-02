import React, { Component } from "react";
import CalcButton from "./NumberButton";

const NumberButtons = [
  { id: "zero", number: 0 },
  { id: "one", number: 1 },
  { id: "two", number: 2 },
  { id: "three", number: 3 },
  { id: "four", number: 4 },
  { id: "five", number: 5 },
  { id: "six", number: 6 },
  { id: "seven", number: 7 },
  { id: "eight", number: 8 },
  { id: "nine", number: 9 }
];

const mathOperationButtons = [
  { id: "add", operationSign: "+" },
  { id: "subtract", operationSign: "-" },
  { id: "multiply", operationSign: "*" },
  { id: "divide", operationSign: "/" }
];

class Calculator extends Component {
  state = {
    formula: "",
    currentNumberInput: "",
    displayText: ""
  };

  constructor() {
    super();
    this.addNumber = this.addNumber.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.calcResult = this.calcResult.bind(this);
  }

  addNumber(num) {
    // multiple zeros at beginning of number not allowed
    if (this.state.currentNumberInput === "0" && num === 0) return;

    this.setState(prevState => {
      console.log(prevState);
      return {
        displayText: prevState.displayText + num.toString(),
        currentNumberInput: prevState.currentNumberInput + num.toString()
      };
    });
  }

  addDecimal() {
    // only allow decimal if number already contains at least one digit and doesn't contain a decimal
    if (
      this.state.currentNumberInput.length > 0 &&
      this.state.currentNumberInput.indexOf(".") === -1
    ) {
      this.setState(prevState => {
        return {
          displayText: prevState.displayText + ".",
          currentNumberInput: prevState.currentNumberInput + "."
        };
      });
    }
  }

  addOperation(op) {
    console.log(op + "was clicked");
  }

  calcResult() {
    console.log("result is...");
  }

  render() {
    const displayFormulaText =
      this.state.displayText === "" ? "0" : this.state.displayText;
    return (
      <div>
        <output id="display">{displayFormulaText}</output>
        <section>
          {NumberButtons.map(button => (
            <CalcButton
              key={button.id}
              id={button.id}
              value={button.number}
              onClick={() => this.addNumber(button.number)}
            />
          ))}
          {mathOperationButtons.map(button => (
            <CalcButton
              key={button.id}
              id={button.id}
              value={button.operationSign}
              onClick={() => this.addOperation(button.operationSign)}
            />
          ))}
          <CalcButton id={"decimal"} value={"."} onClick={this.addDecimal} />
          <CalcButton id={"equals"} value={"="} onClick={this.calcResult} />
          <CalcButton id={"clear"} value={"AC"} onClick={this.clearScreen} />
        </section>
      </div>
    );
  }
}

export default Calculator;
