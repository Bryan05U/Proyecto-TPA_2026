import "../styles/BaseCard.css";

type Props = {

  titulo: string;

  children?: React.ReactNode;

  acciones?: React.ReactNode;
};

function BaseCard({
  titulo,
  children,
  acciones
}: Props) {

  return (

    <div className="base-card">

      <h2>{titulo}</h2>

      <div className="contenido-card">
        {children}
      </div>

      <div className="acciones-card">
        {acciones}
      </div>

    </div>
  );
}

export default BaseCard;