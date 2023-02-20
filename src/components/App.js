import React, { useState } from "react";
import SpicyFoodList from "./SpicyFoodList";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const handleToggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  
  return (
    <div className={`App ${darkMode ? "dark": "light"}`}>
  
      <h3>SpicyFoodList</h3>
      <button onClick={handleToggleDarkMode}>Toggle Dark Mode</button>
      <SpicyFoodList />
    </div>
  );
}

export default App;
