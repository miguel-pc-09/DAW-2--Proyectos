import { useEffect, useState } from "react";
import type { Datum, Libros } from "../model/LibrosModel";

const ListaLibros = () => {
  const [libros, setLibros] = useState<Datum[]>([]);

  useEffect(() => {
    const cargarLibros = async () => {
      const peticion = await fetch(
        "https://stephen-king-api.onrender.com/api/books",
      );

      const respuesta: Libros = await peticion.json();

      setLibros(respuesta.data);
    };

    cargarLibros();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Libros de Stephen King</h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {libros.map((libro: Datum) => (
          <div className="col" key={libro.id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{libro.Title}</h5>

                {libro.villains.length > 0 ? (
                  <ul>
                    {libro.villains.map((villano) => (
                      <li key={villano.name}>{villano.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No tiene villanos</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListaLibros;
