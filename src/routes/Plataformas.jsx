import React from 'react'

{/* Componentes */}
import Navegador from "../components/Navegacion";
import PDFViewer from "../components/Pdf";
import Contador from "../components/BotonContador";
import Footer from "../components/footer/Footer";


{/* PDF */}
import pdfPath from "/miarchivo.pdf";


const Plataformas = () => {


  return (
    <div>
      <Navegador/>
      <h1>Visor de PDF</h1>
      <PDFViewer pdf={pdfPath} />

      <Contador/>

      <Footer/>
    </div>
  )
}

export default Plataformas