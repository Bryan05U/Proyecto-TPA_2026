import "../styles/Boton.css";

type BotonProps = {
  nombre: string;
  onClick: () => void;
  classNameExtra?: string;
  icono?: React.ReactNode;
};

function Boton({ nombre, onClick, classNameExtra = "", icono }: BotonProps) {
  return (
    <button
      onClick={onClick}
      className={`boton ${classNameExtra}`}
    >
      {nombre}

      {icono && (
        <div className="icono-boton">
          {icono}
        </div>
      )}
    </button>
  );
}

export default Boton;