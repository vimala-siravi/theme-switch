import React, { useState } from "react";
import ThemeButton from "./components/ThemeButtons/ThemeButton";
import themeButtons from "./data/buttonTheme.json";
import ProductList from "./components/Products/ProductList";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");

  const { lightButton, darkButton, blueButton } = themeButtons;

  const toggleTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div className={`container mx-auto px-4 ${theme}`}>
      <h1 className="text-3xl font-bold underline text-center">
        Switch the theme
      </h1>
      <div className="flex items-center justify-center gap-4 mt-5">
        <ThemeButton theme={lightButton} onClick={() => toggleTheme("light")} />
        <ThemeButton theme={darkButton} onClick={() => toggleTheme("dark")} />
        <ThemeButton theme={blueButton} onClick={() => toggleTheme("blue")} />
      </div>
      <ProductList />
    </div>
  );
};

export default App;
