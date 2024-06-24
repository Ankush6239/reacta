import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Hom2 from "./components/Hom2";
import Home from "./components/Home";
import Home3 from "./components/Home3";
import Notification from "./components/Notification";

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode on", "success"); // Correct spelling
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("Dark mode on", "success"); // Correct spelling
    }
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Notification alert={alert} />
        <Routes>
          <Route path="/" element={
            <Home
              Navbar="college.com"
              Home="home"
              Link="about_us"
              Dropdown="Class"
              mode={mode}
              toggleMode={toggleMode}
            />
          } />
          <Route path="/home2" element={<Hom2 text="enter the text" />} />
          <Route path="/home3" element={<Home3 />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
