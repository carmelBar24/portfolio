import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

function App() {
  return (
     <BrowserRouter>
     <Header/>
     <Introduction/>
     <About/>
     <Skills/>
     <Contact/>
     <Footer/>
     </BrowserRouter>
  );
}

export default App;
