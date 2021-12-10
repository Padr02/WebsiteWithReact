import React from "react";
import "./Button.css";

//arrays med storlek styl och färg
const style = ["button-primary", "button-outline"];
const size = [
  "button-medium",
  "button-large",
  "button-xxl",
  "button-responsive",
];
const color = ["primary", "blue", "red", "green"];
//skeletet för knappen och vad den ska bestå av så man slipper styla den längre fram vid återanvändning
export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
}) => {
  //omg inget väljs sätts knappen till ett default utseende
  const checkButtonStyle = style.includes(buttonStyle) ? buttonStyle : style[0];
  const checkButtonSize = size.includes(buttonSize) ? buttonSize : size[0];
  const checkButtonColor = color.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      className={`button ${checkButtonStyle} ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
