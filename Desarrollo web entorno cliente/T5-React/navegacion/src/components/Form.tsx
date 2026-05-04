import React, { useState } from "react";
import type { User } from "../model/User";

const Form = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [user, setUser] = useState<User>({
    nombre: "",
    apellido: "",
    email: "",
    edad: 0,
    curso: "",
  });

  // Funcion para limpiar el formulario una vez guardado
  const clearData = () => {
    setUser({
      nombre: "",
      apellido: "",
      email: "",
      edad: 0,
      curso: "",
    });
  };

  // Funcion para guardar los datos
  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    // console.log(e.currentTarget.value);
    // Creamos variable con las dos varibles que nos queremos quedar.
    // Recoge el input que se ha cambiado. name nombre de campo ej "nombre", "apellido". value lo que se ha escrito
    const { name, value } = e.currentTarget;
    // Actualiza el objeto user
    setUser((data) => ({
      // Mantiene los datos anteriores
      ...data,
      // Agrega el nuevo par clave valor
      [name]: value,
    }));
  };
  return (
    <div>
      <h1>Formulario para poder agregar datos</h1>
      <input
        value={user.nombre}
        name="nombre"
        className="form-control mb-3"
        onChange={changeHandler}
        placeholder="Introduce nombre"
      />
      <input
        value={user.apellido}
        name="apellido"
        className="form-control mb-3"
        onChange={changeHandler}
        placeholder="Introduce apellido"
      />
      <input
        value={user.edad}
        name="edad"
        onChange={changeHandler}
        className="form-control mb-3"
        placeholder="Introduce edad"
        inputMode="numeric"
      />
      <input
        value={user.email}
        name="email"
        onChange={changeHandler}
        className="form-control mb-3"
        placeholder="Introduce correo"
        inputMode="email"
      />
      <select
        value={user.curso}
        name="curso"
        className="form-select mb-3"
        onChange={changeHandler}
      >
        <option value={"dam"}>DAM</option>
        <option value={"daw"}>DAW</option>
        <option value={"asir"}>ASIR</option>
      </select>
      <button
        onClick={() => {
          // captura los datos de cada uno de los inputs. Añade el usuario a la lista
          setUsers((data) => [...data, user]);
          // Funcion que limpiar el formulario
          clearData();
        }}
        className="btn btn-primary w-100"
      >
        Agregar
      </button>
      <ul className="list-group">
        {/* Recorre la lista. Muestra cada uno en pantalla */}
        {users.map((user) => (
          <li className="list-group-item">
            {user.nombre}
            {user.apellido}
            <button>Ver detalle</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Form;
