import React from 'react'
import Navegacion from "../components/Navegacion";
import Button from "../components/Button";



const Inicio = () => {
  return (

        <div className='fondo relative w-screen h-screen bg-blue-200'>
          <div className="capa-oscura"></div>

              <Navegacion/>

          <div className=' flex justify-start mt-64  bg-cover bg-center '>

                <div className=' ml-32 w-[50rem]'>

                  <h1 className='relative text-white font-extrabold text-5xl uppercase mb-12'>Portal Informativo para proveedores</h1>
                  
                  <Button link="#" text="Conoce mas" />

                </div>

          </div>

        </div>
  )
}

export default Inicio