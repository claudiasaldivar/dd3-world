import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Inicio from "./components/Inicio";
import Wordle from "./components/Worlde"
interface State {
  toggle: boolean
}

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState<State["toggle"]>(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme);
        localStorage.setItem('toggle', isDarkTheme.toString())
    };

  return (
    <div className={`${isDarkTheme ? 'dark text-white' : 'light'}`}>
      {localStorage.getItem('init')==='true' ? (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Wordle isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />} />
          </Routes>
        </BrowserRouter>
      ): (
        <Inicio isDarkTheme={isDarkTheme} toggleTheme={toggleTheme} />
      )}
    </div>

  );
}

export default App;
