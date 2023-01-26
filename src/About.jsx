import React from 'react'
import Navbar from "./Navbar"
import "./About.css";
function About() {
  return (
    <div>
         <Navbar/>
    
    <div className="md:bg-[url('assets/img/bg.jpeg')] md:bg-cover md:h-screen">
      
    <div className="md:mx-48">
    <section className="  md:flex-center justify-center md:justify-between  w-full h-full bg-white
     p-6 xl:flex xl:flex-row reverse navs
    ">
            <div className="mr-6">
                <h1
                    className="text-dark mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                    SOBRE NOSOTROS</h1>
                <p className="text-body-color mb-9 text-base leading-relaxed ">Renzo y Romina son dos fotógrafos con una gran pasión por la fotografía y una gran habilidad para capturar momentos únicos e inolvidables. Ambos tienen un estilo creativo y artístico, y se especializan en diferentes áreas de la fotografía, como bodas, retratos y paisajes. Renzo tiene un enfoque más clásico y tradicional, mientras que Romina tiene un enfoque más contemporáneo y experimental. Juntos, combinan su talento y experiencia para crear una amplia variedad de estilos y opciones de fotografía para sus clientes. Su trabajo es excepcional y es conocido por su atención al detalle, su capacidad para capturar la esencia de sus sujetos y su habilidad para crear imágenes únicas y memorables.
               </p>
            </div>
            <img className="mr-6" src="src\assets\img\renzoromina.png" />
        </section>
    </div>
</div>
</div>
  )
}

export default About