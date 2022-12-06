import {Link} from "react-router-dom"
import './Mini-gallery.css'
import Navbar from "./Navbar"
const align = {
  textAlign:'center'
}


function Minigallery() {

  
  return (
    <div>
    <header>
    <Navbar/>
    </header>
      
    
    <section className="overflow-hidden my-6 pb-4">
   
    <div className="container px-5 py-2 mx-auto">
      <div className="flex flex-wrap justify-center -m-1 md:mb-2">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 shadow-sm hover:shadow-gray-700/25"
              src="src\assets\img\_REN0003.jpg"/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 shadow-sm hover:shadow-gray-700/25"
              src="src\assets\img\_REN0006.jpg"/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 shadow-sm hover:shadow-gray-700/25"
              src="src\assets\img\_REN0008.jpg"/>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center -m-1 md:mb-2">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <img alt="chencho facha"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 shadow-sm hover:shadow-gray-700/25"
              src="src\assets\img\_REN0016.jpg"/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 shadow-sm hover:shadow-gray-700/25"
              src="src\assets\img\_REN0013.jpg"/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 shadow-sm hover:shadow-gray-700/25"
              src="src\assets\img\_REN0015.jpg"/>
          </div>
        </div>
      </div>
      <div style={align}  className="mt-10">
        <Link to="/gallery"
          className="px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none transition">
        Ver mas fotos 
        </Link>
      </div>
    </div>
  </section>
  </div>

  )
}

export default Minigallery