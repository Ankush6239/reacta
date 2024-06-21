import { useState } from "react";
import About from "./components/About";
import Hom2 from "./components/Hom2";
import Home from "./components/Home";
import Home3 from "./components/Home3";
import Notification from "./components/Notification";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light');
  const[alert, setAlert]=useState(null);
  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type,
      });
      setTimeout(()=>{
        setAlert(null);
      }, 3000) 
  }
  const toggleMode = () => {
    if (mode === 'dark') {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert("light mode on ","sucess");// Light color
    } else {
      setMode('dark');
      document.body.style.backgroundColor = 'grey';
      showAlert("dark mode on ","sucess"); // Dark color
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
      <Notification
      alert={alert}
      />
      {/* <Hom2 text="enter the text" />
      <Home3 /> */}
      <About />
    </div>
  );
}

export default App;
