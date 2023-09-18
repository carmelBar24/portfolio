import Header from "./components/Header/Header";
import Introduction from "./components/Introduction/Introduction";
import About from "./components/About/About";
import Footer from "./components/Footer/Footer";
import {BrowserRouter} from "react-router-dom";

function App() {
  return (
     <BrowserRouter>
     <Header/>
     <Introduction/>
     <About/>
     <Footer/>
     </BrowserRouter>
  );
}

export default App;
