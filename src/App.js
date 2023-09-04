import React, { useState } from "react";
import ThemeButton from "./components/ThemeButtons/ThemeButton";
import themeButtons from "./data/buttonTheme.json";
import ProductList from "./components/Products/ProductList";
import { themes } from "tscommon-components";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState("light");
  const [listLimit, setListLimit] = useState(2);

  const { lightButton, darkButton, blueButton } = themeButtons;

  const toggleTheme = (newTheme, productLimit = 2) => {
    setTheme(newTheme);
    setListLimit(productLimit);
  };

  return (
    <div className={`container mx-auto px-4 ${theme}`}>
      <h1 className="text-3xl font-bold underline text-center">
        Switch the theme
      </h1>
      <h1 className="mt-2 text-center">
        Following themes are available from the common library {themes.light}{" "}
        {themes.dark} {themes.blue}
      </h1>
      <div className="flex items-center justify-center gap-4 mt-5">
        <ThemeButton
          theme={lightButton}
          onClick={() => toggleTheme("light", 2)}
        />
        <ThemeButton
          theme={darkButton}
          onClick={() => toggleTheme("dark", 5)}
        />
        <ThemeButton
          theme={blueButton}
          onClick={() => toggleTheme("blue", 10)}
        />
      </div>
      <ProductList productLimit={listLimit} key={listLimit} />
    </div>
  );
};

export default App;
