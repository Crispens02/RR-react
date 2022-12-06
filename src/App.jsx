import Navbar from "./Navbar";
import Minigallery from "./Mini-gallery";
import Contact from "./Contact";
import Gallery from "./Gallery";
import About from "./About";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
  
 <Routes>
  <Route path ="/" element ={ <Minigallery/>}/>
  <Route path ="/contact" element ={ <Contact/>}/>
  <Route path ="/about" element ={ <About/>}/>
  <Route path ="/gallery" element ={ <Gallery/>}/>
 </Routes>
     
    </BrowserRouter>
  );
}




export default App;
