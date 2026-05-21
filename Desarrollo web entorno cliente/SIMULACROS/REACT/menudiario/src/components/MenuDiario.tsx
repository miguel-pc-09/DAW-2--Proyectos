import { useState } from "react";

type Alimento = {
  id: number;
  nombre: string;
  calorias: number;
};

const MenuDiario = () => {
  const [nombre, setNombre] = useState("");
  const [calorias, setCalorias] = useState("");
  const [alimentos, setAlimentos] = useState<Alimento[]>([]);

  const agregarAlimento = () => {
    if (nombre.trim() === "" || calorias.trim() === "") {
      alert("Rellena todos los campos");
      return;
    }

    if (Number(calorias) <= 0) {
      alert("Las calorías deben ser mayores que 0");
      return;
    }

    const nuevoAlimento: Alimento = {
      id: Date.now(),
      nombre: nombre,
      calorias: Number(calorias),
    };

    setAlimentos([...alimentos, nuevoAlimento]);

    setNombre("");
    setCalorias("");
  };

  const eliminarAlimento = (id: number) => {
    setAlimentos(alimentos.filter((alimento) => alimento.id !== id));
  };

  const totalCalorias = alimentos.reduce(
    (total, alimento) => total + alimento.calorias,
    0,
  );

  return (
    <div className="container mt-4">
      <h1>Menú diario</h1>

      <div className="mb-3">
        <label className="form-label">Nombre del alimento</label>
        <input
          type="text"
          className="form-control"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Ejemplo: Manzana"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Calorías</label>
        <input
          type="number"
          className="form-control"
          value={calorias}
          onChange={(e) => setCalorias(e.target.value)}
          placeholder="Ejemplo: 52"
        />
      </div>

      <button className="btn btn-primary" onClick={agregarAlimento}>
        Añadir al menú
      </button>

      <h2 className={totalCalorias > 2000 ? "text-danger mt-4" : "mt-4"}>
        Calorías Totales: {totalCalorias}
      </h2>

      <ul className="list-group mt-3">
        {alimentos.map((alimento) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={alimento.id}
          >
            <span>
              {alimento.nombre} - {alimento.calorias} kcal
            </span>

            <button
              className="btn btn-danger btn-sm"
              onClick={() => eliminarAlimento(alimento.id)}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuDiario;
