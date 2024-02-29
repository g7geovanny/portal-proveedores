import React from 'react'

import Logo from "../assets/holcim-blanco.svg";
import { Link } from "react-router-dom";

const Navegacion = () => {

  return (

    <nav className=' flex justify-between items-center w-full bg-black p-5 relative'>
      <Link to="/"><img className=' w-40 h-42' src={Logo} alt="" /></Link>
      <Link to="/" className='text-white text-lg font-semibold'>Inicio</Link>
      <Link to="/prevaloracion" className='text-white text-lg font-semibold' href="">Prevaloracion</Link>
      <Link to="/altaproveedor" className='text-white text-lg font-semibold' href="">Alta de Proveedor</Link>
      <Link to="/precalificacion" className='text-white text-lg font-semibold' href="">Precalificacion</Link>
      <Link to="/plataformas" className='text-white text-lg font-semibold' href="">Plataformas</Link>
    </nav>
  )
}

export default Navegacion