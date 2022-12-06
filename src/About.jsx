import React from 'react'
import Navbar from "./Navbar"
function About() {
  return (
    <div>
         <Navbar/>
    
    <div className="md:bg-[url('assets/img/bg.jpeg')] md:bg-cover md:h-screen">
    <div className="md:mx-48">
        <section className="flex flex-wrap justify-center md:justify-between  w-full h-full bg-white p-6">
            <div className="mr-6">
                <h1
                    className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    SOBRE NOSOTROS</h1>
                <p className="text-body-color mb-9 text-base leading-relaxed">Romina Bolzan, Renzo Treppo.</p>
            </div>
            <img src="src\assets\img\renzoromina.png" />
        </section>
    </div>
</div>
</div>
  )
}

export default About