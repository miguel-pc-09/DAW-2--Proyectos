import { useEffect, useState } from "react";

function App() {
  const [paises, setPaises] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags,languages,cca3")
      .then((respuesta) => respuesta.json())
      .then((datos) => setPaises(datos));
  }, []);

  return (
    <div className="container">
      <h1>Países del mundo</h1>

      {paises.map((pais) => (
        <div className="card col-3" key={pais.cca3}>
          <img src={pais.flags.png} alt={pais.name.common} />
          <h2>{pais.name.common}</h2>
          <h3>Lenguajes:</h3>
          {pais.languages ? (
            <ul>
              {Object.values(pais.languages).map((lenguaje, index) => (
                <li key={index}>{lenguaje}</li>
              ))}
            </ul>
          ) : (
            <p>No se encontraron lenguajes</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default App;
