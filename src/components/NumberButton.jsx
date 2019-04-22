import React from "react";

const NumberButton = props => {
  return <button id={props.numberInText}>{props.number}</button>;
};

export default NumberButton;
