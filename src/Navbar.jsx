import {Link} from "react-router-dom"

import './Navbar.css';
import {useState} from 'react'


function Navbar() {
  const [ menu , setMenu ] = useState( false )

  const toggleMenu = () => {
      setMenu( !menu )
  }

  return (
    
    <div className="Cabecera">
    <nav className="px-2 sm:px-4 py-2.5">
    <div className="container flex flex-wrap justify-between items-center mx-auto">
      <Link to="/" href="#" className="flex items-center flex-col ml-10">
        <img src="src\assets\img\logo.svg" className="h-14 sm:h-24 invert" alt="RR Logo"/>
        <span className="text-2xl hidden md:block absolute logo-text text-white">fotografía y vídeo</span>
      </Link>
      <button data-collapse-toggle="navbar-default" type="button"
        className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" 
        aria-controls="navbar-default" aria-expanded="false"
        
        onClick={ toggleMenu }
         >
        <span className="sr-only"
        >Open main menu</span>
        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clipRule="evenodd"></path>
        </svg>
      </button>

      <div 
       className={ `Cabecera-nav ${ menu ? 'isActive' : '' }` }>
       
        <ul className="flex flex-col p-4 mt-4  md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 ">
        <li className="Cabecera-li">
        <Link to="/"
             href="#"
             className="block py-2 pr-4 pl-3 text-white hover:text-gray-500 hover:bg-gray-100/5 md:hover:bg-transparent md:p-0">INICIO</Link>
          </li>
          <li className="Cabecera-li"> 
           
             <Link to="/gallery"
             href="#"
             className="block py-2 pr-4 pl-3 text-white hover:text-gray-500 hover:bg-gray-100/5 md:hover:bg-transparent md:p-0">  PORTAFOLIO</Link>
          </li>
          <li className="Cabecera-li">
          <Link to="/about"
             href="#"
             className="block py-2 pr-4 pl-3 text-white hover:text-gray-500 hover:bg-gray-100/5 md:hover:bg-transparent md:p-0">
                ACERCA
              DE</Link>
          </li>
          <li className="Cabecera-li">
          <Link to="/contact"
             href="#"
             className="block py-2 pr-4 pl-3 text-white hover:text-gray-500 hover:bg-gray-100/5 md:hover:bg-transparent md:p-0">
                CONTACTO</Link>
          </li>
        </ul>
        
      </div>
    </div>
  </nav>
  </div>
 
 
  )
}

export default Navbar