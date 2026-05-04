import { useState } from "react";

type Props = {
  onCrear: (nombre: string) => void;
  onCerrar: () => void;
};

function FormularioEscena({ onCrear, onCerrar }: Props) {
  const [nombre, setNombre] = useState("");

  const handleCrear = () => {
    if (nombre.trim() === "") return;
    onCrear(nombre);
    setNombre("");
  };

  return (
    <div className="formulario">
      <h2>Crear escena</h2>

      <input
        type="text"
        placeholder="Nombre de la escena"
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <p>(Dispositivos aquí)</p>

      <button onClick={handleCrear}>Listo</button>
      <button onClick={onCerrar}>Cancelar</button>
    </div>
  );
}

export default FormularioEscena;