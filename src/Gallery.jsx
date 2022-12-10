import './Navbar.css';
import React from 'react'
import Navbar from "./Navbar"
import {Link} from "react-router-dom"
const IMAGE_BASE_PATH = "src/assets/img";
function Gallery() {
    const align = {
        textAlign:'center'
      }
  return (
    <div>
       <Navbar/>
    
    <section className="overflow-hidden my-6 pb-4">
    <h2 className="text-center text-white text-5xl p-4 font-medium title mb-2">Galería</h2>
    <div className="container px-5 py-2 mx-auto">
      <div className="flex flex-wrap justify-center -m-1 md:mb-2">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/3 p-1 md:p-2">  
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0029.jpg`}/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0050.jpg`}/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0061.jpg`}/>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-center -m-1 md:mb-2">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <img alt="chencho facha"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0022.jpg`}/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0019.jpg`}/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0111.jpg`}/>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center -m-1 md:mb-2">
        <div className="flex flex-wrap w-full">
          <div className="w-full md:w-1/3 p-1 md:p-2">
            <img alt="chencho facha"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0025.jpg`}/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0114.jpg`}/>
          </div>
          <div className="w-1/2 md:w-1/3 p-1 md:p-2">
            <img alt="gallery"
              className="block object-cover object-center w-full h-full cursor-pointer transition ease-in-out hover:scale-95 "
             src={`${IMAGE_BASE_PATH}/_REN0006.jpg`}/>
          </div>
        </div>
      </div>
      

      <div style= {align} className="mt-10">
         <Link to="/"
          className="px-4 py-2 text-base font-medium leading-6 text-black whitespace-no-wrap bg-white border-2 border-transparent shadow-sm hover:bg-transparent hover:text-white hover:border-white focus:outline-none transition">
         volver
        </Link>
      </div>
    </div>
  </section>
  </div>
  )
}

export default Gallery

