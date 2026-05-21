import React, { useEffect, useState } from "react";
import type { Libro, LibrosRespuesta } from "../model/Objeto";

const List = () => {
  const [libros, setLibros] = useState<Libro[]>([]);
  useEffect(() => {
    const librosFetch = async () => {
      const libroAPI = await fetch(
        "https://stephen-king-api.onrender.com/api/books",
      );

      const libroResponse: LibrosRespuesta = await libroAPI.json();
      setLibros(libroResponse.data);
      console.log(libroResponse.data);
    };

    librosFetch();
  }, []);

  return (
    <>
      <div className="container mt-4">
        <h1 className="text-center mb-4">Libros de Stephen King</h1>

        <ul className="list-group">
          {libros.map((libro: Libro) => (
            <li className="list-group-item" key={libro.id}>
              <h5>{libro.Title}</h5>

              {libro.villains.length > 0 ? (
                <ul>
                  {libro.villains.map((villano) => (
                    <li key={villano.name}>{villano.name}</li>
                  ))}
                </ul>
              ) : (
                <p>No tiene villanos</p>
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* <div className="container mt-4">
      <h1 className="text-center mb-4">Libros de Stephen King</h1>

      <div className="row row-cols-1 row-cols-md-2 g-4">
        {libros.map((libro: Libro) => (
          <div className="col">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{libro.Title}</h5>

                {libro.villains.length > 0 ? (
                  <ul>
                    {libro.villains?.map((villano) => (
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
    </div> */}
    </>
  );
};

export default List;
