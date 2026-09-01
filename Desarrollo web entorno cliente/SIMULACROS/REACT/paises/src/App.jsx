import { useEffect, useState } from "react";

function App() {
  const [paises, setPaises] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.restcountries.com/countries/v5?limit=100&response_fields=names.common,codes.alpha_3,flag,languages",
    )
      .then((respuesta) => respuesta.json())
      .then((datos) => setPaises(datos.data.objects));
  }, []);

  return (
    <div className="container">
      <h1>Países del mundo</h1>

      {paises.map((pais) => (
        <div className="card col-3" key={pais.codes.alpha_3}>
          {pais.flag?.image && (
            <img src={pais.flag.image} alt={pais.names.common} />
          )}

          <h2>{pais.names.common}</h2>

          <h3>Lenguajes:</h3>

          {pais.languages?.length > 0 ? (
            <ul>
              {pais.languages.map((lenguaje, index) => (
                <li key={index}>{lenguaje.name}</li>
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
