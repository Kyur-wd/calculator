import React from "react";

const CalcButton = props => {
  return (
    <button
      id={props.id}
      className={"calculator-button"}
      onClick={props.onClick}
    >
      {props.value}
    </button>
  );
};

export default CalcButton;
