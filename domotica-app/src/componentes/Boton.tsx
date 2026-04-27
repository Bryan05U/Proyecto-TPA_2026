import "./Boton_diseno.css";

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
      {nombre}: {estado ? "ON" : "OFF"}
    </button>
  );
}

export default Boton;