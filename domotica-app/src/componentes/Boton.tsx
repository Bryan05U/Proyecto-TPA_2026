import "./Boton.css";

type BotonProps = {
  nombre: string;
  estado: boolean;
  onClick: () => void;
};

function Boton({ nombre, estado, onClick }: BotonProps) {
  return (
    <button
      onClick={onClick}
      className={`boton ${estado ? "activo" : "desactivado"}`}
    >
      {nombre}
    </button>
  );
}

export default Boton;