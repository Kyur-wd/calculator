import React from "react";
import EqualButton from "./EqualButton";
import NumberButton from "./NumberButton";

const NumberButtons = [
  { numberInText: "zero", number: 0 },
  { numberInText: "one", number: 1 },
  { numberInText: "two", number: 2 },
  { numberInText: "three", number: 3 },
  { numberInText: "four", number: 4 },
  { numberInText: "five", number: 5 },
  { numberInText: "six", number: 6 },
  { numberInText: "seven", number: 7 },
  { numberInText: "eight", number: 8 },
  { numberInText: "nine", number: 9 }
];

const CalculatorButtons = () => {
  return (
    <div>
      <EqualButton />
      {NumberButtons.map(numberObject => (
        <NumberButton
          numberInText={numberObject.numberInText}
          number={numberObject.number}
        />
      ))}
    </div>
  );
};

export default CalculatorButtons;
