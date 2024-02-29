import React, { useState, useEffect } from 'react';

const BotonContador = () => {
  const [contador, setContador] = useState(() => {
    // Intenta recuperar el valor del contador desde localStorage
    const storedValue = localStorage.getItem('contador');
    // Si hay un valor almacenado, conviértelo a un número
    return storedValue ? parseInt(storedValue) : 0;
  });

  const handleClick = () => {
    setContador(prevContador => {
      const nuevoContador = prevContador + 1;
      // Guarda el nuevo contador en localStorage
      localStorage.setItem('contador', nuevoContador);
      return nuevoContador;
    });
  };

  // Utiliza useEffect para actualizar el título de la página cuando el contador cambia
  useEffect(() => {
    document.title = `Botón clickeado ${contador} veces`;
  }, [contador]);

  return (
    <div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={handleClick}
      >
        Haz clic aquí
      </button>
      <p>Has hecho clic {contador} veces</p>
    </div>
  );
};

export default BotonContador;
