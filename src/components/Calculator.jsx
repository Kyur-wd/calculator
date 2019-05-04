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
  { id: "multiply", operationSign: "x" },
  { id: "divide", operationSign: "/" }
];

class Calculator extends Component {
  state = {
    currentNumberInput: "0",
    displayText: "0"
  };

  constructor() {
    super();
    this.addNumber = this.addNumber.bind(this);
    this.addDecimal = this.addDecimal.bind(this);
    this.addOperation = this.addOperation.bind(this);
    this.calcResult = this.calcResult.bind(this);
    this.clearScreen = this.clearScreen.bind(this);
  }

  addNumber(num) {
    // the starting zero will be replaced by the first input number
    if (this.state.currentNumberInput === "0") {
      this.setState({
        displayText: num.toString(),
        currentNumberInput: num.toString()
      });
    }
    // add to the number otherwise
    else {
      this.setState(prevState => {
        return {
          displayText: prevState.displayText + num.toString(),
          currentNumberInput: prevState.currentNumberInput + num.toString()
        };
      });
    }
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
    const lastChar = this.state.displayText[this.state.displayText.length - 1];
    // if last character is 0 (the default starting value), a decimal or an operation, replace it with new input operation
    if (
      lastChar === "/" ||
      lastChar === "x" ||
      lastChar === "-" ||
      lastChar === "+" ||
      lastChar === "." ||
      this.state.currentNumberInput === "0"
    ) {
      this.setState(prevState => {
        return {
          displayText: prevState.displayText.replace(/.$/, op),
          currentNumberInput: ""
        };
      });
    }
    // otherwise we just add the clicked operation sign to the string
    else {
      this.setState(prevState => {
        return {
          displayText: prevState.displayText + op,
          currentNumberInput: ""
        };
      });
    }
  }

  calcResult() {
    let formula = this.state.displayText.replace(/x/g, "*");
    console.log(eval(formula));
  }

  clearScreen() {
    this.setState({
      displayText: "0",
      currentNumberInput: "0"
    });
  }

  render() {
    return (
      <div>
        <output id="display">{this.state.displayText}</output>
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
