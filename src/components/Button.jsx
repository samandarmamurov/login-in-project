import React from "react";

function Button({ text, variant, onclick, icon }) {
  const variants = {
    primary: "",
    outline: "",
    secondary:","
  };
  return <button className={`${variants[variant]}`}>{text}</button>;
}

export default Button;
