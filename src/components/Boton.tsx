import "../styles/Boton.css";

type BotonProps = {
  nombre: string;
  onClick: () => void;
  classNameExtra?: string;
  icono?: string;
};

function Boton({ nombre, onClick, classNameExtra = "", icono }: BotonProps) {
  return (
    <button
      onClick={onClick}
      className={`boton ${classNameExtra}`}
    >
      {nombre}
      
      {icono && (
        <img src={icono} className="icono-boton" />
      )}
    </button>
  );
}

export default Boton;