import "../styles/Boton.css";

type BotonProps = {
  nombre: string;
  onClick: () => void;
  classNameExtra?: string; 
};

function Boton({ nombre, onClick, classNameExtra = "" }: BotonProps) {
  return (
    <button
      onClick={onClick}
      className={`boton ${classNameExtra}`}
    >
      {nombre}
    </button>
  );
}

export default Boton;