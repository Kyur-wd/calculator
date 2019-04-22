import React, { Component } from "react";
import Display from "./Display";
import CalculatorButtons from "./CalculatorButtons";

class Calculator extends Component {
  state = {};
  render() {
    return (
      <div>
        <Display />
        <CalculatorButtons />
      </div>
    );
  }
}

export default Calculator;
