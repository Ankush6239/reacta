import { useState } from "react";
import About from "./components/About";
import Hom2 from "./components/Hom2";
import Home from "./components/Home";
import Home3 from "./components/Home3";

function App() {
  const [mode, setMode] = useState('light');
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white'; // Light color
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey'; // Dark color
    }
  }

  return (
    <div className="App">
      <Home
        Navbar="college.com"
        Home="home"
        Link="about us"
        Dropdown="Class"
        mode={mode}
        toggleMode={toggleMode}
      />
      <Hom2 text="enter the text" />
      <Home3 />
      <About />
    </div>
  );
}

export default App;
