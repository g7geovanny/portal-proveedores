import React from 'react'

import Navegacion from "../components/Navegacion";
import Carousel from "../components/Carousel";


import imagen1 from "../assets/imagen1.jpg";
import imagen2 from "../assets/imagen2.jpg";
import imagen3 from "../assets/imagen3.jpg";




import "../styles/inicio.css"



const Inicio = () => {
  
  return (

      <main className=''>
        
          <Navegacion/>

          <div className='w-full bg-slate-500'>
            <p className='text-white text-center p-5 font-bold uppercase text-lg'>portal informativo para proveedores </p>


          </div>

          <Carousel>
            <div className=' sli-1  w-full h-full '></div>
            <div className=' sli-2  w-full h-full '></div>
            <div className=' sli-3  w-full h-full '></div>
          </Carousel>




        <div className='bg-black p-14 space-y-10'>

          <h2 className=' text-center text-4xl font-bold text-white uppercase'>informacion para proveedores</h2>

          <p className=' text-center text-white text-lg '>El portal informativo para proveedores de Holcim constituye una plataforma centralizada que brinda información detallada sobre el proceso de colaboración. En esta página, los proveedores encuentran recursos clave y contactos que les sirven de apoyo a lo largo de todo el proceso de trabajo con nosotros</p>

        </div>


        <div className='p-10'>

          <h2 className='text-black text-center font-bold text-3xl uppercase'>lo que encontraras</h2>

            <div className='flex justify-around items-center mt-10'>

              <div className=' w-96 h-96'>
                <div className='w-full h-56'>
                  <img className='w-full h-full object-cover' src={imagen1} alt="fondo" />
                </div>
                <p className='text-center font-bold text-3xl mt-5 '>Manuales de usuario</p>
              </div>

              <div className=' w-96 h-96'>
                <div className='w-full h-56'>
                  <img className='w-full h-full object-cover' src={imagen2} alt="fondo" />
                </div>
                <p className='text-center font-bold text-3xl mt-5'>Contactos principales</p>
              </div>

              <div className=' w-96 h-96'>
                <div className='w-full h-56'>
                  <img className='w-full h-full object-cover' src={imagen3} alt="fondo" />
                </div>
                <p className='text-center font-bold text-3xl mt-5'>Videos interativos</p>
              </div>
              
            </div>

        </div>
        

         


      </main>
  )
}

export default Inicio