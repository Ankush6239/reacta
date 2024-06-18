import Hom2 from "./components/Hom2";
import Home from "./components/Home";
import Home3 from "./components/Home3";
function App() {
  return (
    <div className="App">
      <Home
      Navbar="college.com"
      Home = "home"
      Link ="about us"
      Dropdown="Class"

      />
      <Hom2 
      text="entert the text"
      />
      <Home3/>

    </div>
  );
}

export default App;
