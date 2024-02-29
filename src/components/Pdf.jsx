import React from 'react';


import PDF from "/miarchivo.pdf";

const PDFComponent = () => {
  return (
    <div className='w-full mt-10 flex justify-center items-center'>
      {/* Enlace al PDF */}
      <a className=' bg-slate-800 p-3 text-white' href={PDF} download>Descargar PDF</a>
    </div>
  );
};

export default PDFComponent;
