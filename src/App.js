import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";

function App() {
  return (
     <BrowserRouter>
     <Header/>
     <Introduction/>
     <About/>
     <Projects/>
     <Skills/>
     <Experience/>
     <Contact/>
     <Footer/>
     </BrowserRouter>
  );
}

export default App;
