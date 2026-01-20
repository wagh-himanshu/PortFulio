import Navbar from "./components/Navbar.jsx";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact"
function App() {
 

  return (
    <>
    <h1 style={{ color: "red" }}>
      React is rendering correctly ✅
    </h1>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
   
    </>
  );
}

export default App
