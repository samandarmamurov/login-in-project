import React from "react";

function Button({ text, variant, onclick, icon }) {
  const variants = {
    primary: "bg-indigo-600 text-white hover:bg-indigo-700",
    outline: "bg-white text-gray-800 border border-gray-300 hover:bg-gray-50",
    secondary: "bg-gray-100 text-gray-800 hover:bg-gray-200"
  };
  return (
    <button
      onClick={onclick}
      className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold cursor-pointer transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg ${variants[variant]}`}
    >
      {text}
      {icon}
    </button>
  );
}

export default Button;