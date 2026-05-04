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

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    // console.log(e.currentTarget.value);
    // Creamos variable con las dos varibles que nos queremos quedar.
    const { name, value } = e.currentTarget;
    setUser((data) => ({
      ...data,
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
          // captura los datos de cada uno de los inputs
          setUsers((data) => [...data, user]);
          clearData();
        }}
        className="btn btn-primary w-100"
      >
        Agregar
      </button>
      <ul className="list-group">
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
