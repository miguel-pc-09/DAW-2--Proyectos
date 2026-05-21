import React, { useEffect, useState } from "react";
import type { Libro, Libros } from "../model/Objeto";

const List = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  useEffect(() => {
    const pedirLibros = async () => {
      const respuesta = await fetch(
        "https://stephen-king-api.onrender.com/api/books",
      );
      const datos: Libros = await respuesta.json();
      setLibros(datos.data);
    };
    pedirLibros();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Libros de Stephen King</h1>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
        {libros.map((libro) => (
          <div className="col" key={libro.id}>
            <div className="card h-100">
              <div className="card-body">
                <h5 className="card-title">{libro.Title}</h5>

                <p>
                  <strong>Año:</strong> {libro.Year}
                </p>

                <p>
                  <strong>Editorial:</strong> {libro.Publisher}
                </p>

                <p>
                  <strong>Páginas:</strong> {libro.Pages}
                </p>

                <h6>Malos:</h6>

                {libro.villains.length > 0 ? (
                  <ul>
                    {libro.villains.map((villano) => (
                      <li key={villano.name}>{villano.name}</li>
                    ))}
                  </ul>
                ) : (
                  <p>No tiene malos</p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default List;
