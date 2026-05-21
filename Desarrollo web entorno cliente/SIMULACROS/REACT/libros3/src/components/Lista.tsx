import React, { useEffect, useState } from "react";
import type { Libro, Libros } from "../model/Objeto";

const Lista = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  useEffect(() => {
    const pedirLibros = async () => {
      const respues = await fetch(
        "https://stephen-king-api.onrender.com/api/books",
      );
      const datos: Libros = await respues.json();
      setLibros(datos.data);
    };
    pedirLibros();
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center">Libros SK</h1>
      <div className="row">
        {libros.map((libro) => (
          <div className="col-4" key={libro.id}>
            <div className="card">
              <div className="card-body">
                <h5>{libro.Title}</h5>
                <p>Año: {libro.Year}</p>

                <p>Editorial: {libro.Publisher}</p>

                <p>Páginas: {libro.Pages}</p>

                <h6>Villanos</h6>
                <ul>
                  {libro.villains.map((villano) => (
                    <li key={villano.name}>{villano.name}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Lista;
