import React from "react";

const CalcButton = props => {
  return (
    <button id={props.id} onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default CalcButton;
