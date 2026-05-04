import React from 'react';

interface BotonProps {
  nombre: string;
  onClick: () => void;
  classNameExtra?: string;
  icono?: string;
}

const Boton: React.FC<BotonProps> = ({ nombre, onClick, classNameExtra, icono }) => {
  return (
    <button className={`boton ${classNameExtra}`} onClick={onClick}>
      <span>{nombre}</span>
      {icono && <img src={icono} alt={nombre} />}
    </button>
  );
};

export default Boton;