import "../styles/Boton.css";

type BotonProps = {
  nombre: string;
  onClick: () => void;
  ubicacion?: string; 
};

function Boton({ nombre, onClick, ubicacion = "" }: BotonProps) {
  return (
    <button
      onClick={onClick}
      className={`boton ${ubicacion}`}
    >
      {nombre}
    </button>
  );
}

export default Boton;