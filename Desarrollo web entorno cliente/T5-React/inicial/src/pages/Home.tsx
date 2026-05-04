import React, { useState } from "react";

const Home = () => {
  const nombre = "Miguel";
  // Funcion useState(valor inicial) -> dividido en una variable y la funcion que cambia el valor de la variable
  const [contador, setContador] = useState<number>(5);
  const [inputValue, setInputValue] = useState<number>(5);
  /* let contador = 10; */

  // Funcion que gestiona directamente
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // console.log("Boton pulsado");
    // diferenciar que boton ha sido pulsado
    // Todo boton tiene una logica comun
    switch (e.currentTarget.value) {
      case "incrementar":
        setContador((data) => data + 1);
        break;
      case "decrementar":
        setContador((data) => data - 1);
        break;
      case "resetear":
        setContador(0);
        break;
      case "setear":
        setContador(inputValue);
        break;
    }
  };

  return (
    <>
      <h1>Home contador</h1>
      <p>
        Este primer componente a sido desarrollado por {nombre} para definir el
        useState
      </p>
      <input
        onChange={(e) => {
          setInputValue(Number(e.currentTarget.value));
        }}
        className="form-control"
        placeholder="Introduce el valor a setear"
        type="number"
      />
      <div className="mt-3 mb-3">
        <button
          value={"incrementar"}
          className="btn btn-primary"
          /* onClick={() => {
            // setcontador(funcion -> una funcion que retorna el nuevo valor de la variable)
            setContador((data) => data + 1);
             contador++;
            console.log("Pulsado boton incremento");
            console.log(`El valor de la variable es ${contador}`); 
          }} */
          onClick={clickHandler}
        >
          Incrementar
        </button>
        <button
          value={"decrementar"}
          className="btn btn-secondary"
          /* onClick={() => {
            setContador((data) => data - 1);
            // setContador(contador - 1);
             contador--;
            console.log("Pulsado boton decremento");
            console.log(`El valor de la variable es ${contador}`); 
          }} */
          onClick={clickHandler}
        >
          Decrementar
        </button>
        <button
          value={"resetear"}
          onClick={clickHandler}
          className="btn btn-danger"
          /* onClick={() => {
            // Cuando el valor que se le asigna no depende del valor anterior
            setContador(0);
            contador--;
            console.log("Pulsado boton decremento");
            console.log(`El valor de la variable es ${contador}`); 
          }} */
        >
          Resetear
        </button>
        <button
          value={"setear"}
          onClick={clickHandler}
          className="btn btn-danger"
          /* onClick={() => {
            // Cuando el valor que se le asigna no depende del valor anterior
            setContador(0);
            contador--;
            console.log("Pulsado boton decremento");
            console.log(`El valor de la variable es ${contador}`); 
          }} */
        >
          Setear
        </button>
      </div>

      <p>
        El valor actual del contador es <span>{contador}</span>
      </p>
    </>
  );
};

export default Home;
