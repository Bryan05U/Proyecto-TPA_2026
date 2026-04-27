import "./Boton.css";

type BotonProps = {
  nombre: string;
  estado: boolean;
  onClick: () => void;
  ubicacion?: string; 
};

function Boton({ nombre, estado, onClick, ubicacion = "" }: BotonProps) {
  return (
    <button
      onClick={onClick}
      className={`boton ${estado ? "activo" : "desactivado"} ${ubicacion}`}
    >
      {nombre}
    </button>
  );
}

export default Boton;