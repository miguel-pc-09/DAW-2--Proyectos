import { useState } from "react";

const Calculadora = () => {
  const [numero1, setNumero1] = useState("");
  const [numero2, setNumero2] = useState("");
  const [resultado, setResultado] = useState(0);

  const sumar = () => {
    setResultado(Number(numero1) + Number(numero2));
  };

  const restar = () => {
    setResultado(Number(numero1) - Number(numero2));
  };

  const multiplicar = () => {
    setResultado(Number(numero1) * Number(numero2));
  };

  const dividir = () => {
    if (Number(numero2) === 0) {
      alert("No se puede dividir entre 0");
    } else {
      setResultado(Number(numero1) / Number(numero2));
    }
  };

  return (
    <div className="container mt-4">
      <h1>Calculadora</h1>

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Número 1"
        value={numero1}
        onChange={(e) => setNumero1(e.target.value)}
      />

      <input
        type="number"
        className="form-control mb-3"
        placeholder="Número 2"
        value={numero2}
        onChange={(e) => setNumero2(e.target.value)}
      />

      <button className="btn btn-primary me-2" onClick={sumar}>
        Sumar
      </button>

      <button className="btn btn-success me-2" onClick={restar}>
        Restar
      </button>

      <button className="btn btn-warning me-2" onClick={multiplicar}>
        Multiplicar
      </button>

      <button className="btn btn-danger" onClick={dividir}>
        Dividir
      </button>

      <h2 className="mt-4">Resultado: {resultado}</h2>
    </div>
  );
};

export default Calculadora;
