import React from "react";
import "./themeButton.css";

function ThemeButton({ theme, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn btn-${theme.backgroundColor} rounded font-bold py-2 px-4 border`}
    >
      {theme.name}
    </button>
  );
}

export default ThemeButton;
