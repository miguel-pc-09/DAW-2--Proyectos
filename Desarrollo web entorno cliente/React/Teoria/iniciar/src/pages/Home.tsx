// Escribiremos rafce para crear la funcion flecha rapido
import React, { useState } from "react";

/* Uso de paso de parametros de clase dentro de const Home = (data)   */
const Home = () => {
  // Definicion de variable para guardar por ejemplo mi nombre y meterlo dentro del return
  const nombre = "Miguel";

  // Utilizacion de Hook useState
  // useState"podemos poner el tipo de valor a guardar <number>"(valor inicial) -> Si no ponemos tipo a guardar, guardara any
  // Esta funcion son dos cosas. Dividido en una variable y la funcion que cambia el valor de la variable.
  // First podemos ponerle el nombre que queramos
  const [contador, setContador] = useState<number>(5);
  const [inputValue, setInputValue] = useState<number>(0);

  // Otra forma sin inline. Comentamos el onclick para utilizarla. El void no es necesario
  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // diferenciar que boton se ha pulsado
    console.log(e.currentTarget.value);
    // todo boton tiene una logica comun
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

  // Definicion de variable "contador" para usarla con el useState. Nos saltara un aviso diciendo que declaramos una variable pero no la estamos usando.
  // let contador = 10;

  // Aqui no podemos crear otra funcion
  // const miFuncion = () => {}; no dara un error pero alerta"is assigned a value but never used" porque no se esta usando esa funcion
  return (
    <>
      <h1>Home contador</h1>
      <p>
        Este primer componente ha sido desarrolado por {nombre} para definir el
        uso de useState
      </p>

      {/* Input para meter numeros */}
      <input
        onChange={(e) => {
          console.log(e.currentTarget.value);
          setInputValue(Number(e.currentTarget.value));
        }}
        className="form-control"
        placeholder="Introduce el valor a setear"
        type="number"
      />
      {/* uso de useState */}
      <div className="mt-3 mb-3">
        {/* Tenemos dos formas de ejecutar la funcion, con un onClick y definimos una funcion arriba y aqui llamamos sin (), o inline la creamos aqui mismo onClick={()=>{}}} */}
        <button
          className="btn btn-primary"
          /* onClick={()=>{
      // 2º Forma de usar setContador. Con funcion flecha.
      setContador((data)=>data +1)


       // Tenemos dos formas de usar setContador. Llamamos a la variable contador y le sumamos 1  
      // setContador(funcion -> una funcion que retorna el nuevo valor de la variable)
      // setContador(contador + 1)


       contador++;
      console.log("Pulsado boton decremento");
      console.log(`El valor de la variable es ${contador}`); 

      }} */
          // Damos valores para diferenciar bien cada boton
          value={"incrementar"}
          // Con el clickHandler
          onClick={clickHandler}
        >
          Incrementar
        </button>

        <button
          className="btn btn-secondary"
          /* onClick={()=>{  
      // 2º Forma de usar setContador. Con funcion flecha.
      setContador((data)=>data - 1)

      // 1º Forma de usar setContador. Llamamos a la variable contador y le restamos 1
      // setContador(contador - 1)

       // Con esto renderizamos el let contador, para comprobarlo usamos otro log para ver como del 10 baja numeros 
       // pero la variable se mantiene igual, no se reenderiza. Para esto usaremos los HOOKS en este caso el useState
       // comentamos la variable contador
       contador--;
      console.log("Pulsado boton decremento");
      console.log(`El valor de la variable es ${contador}`); 
      }} */
          // Damos valores para diferenciar bien cada boton
          value={"decrementar"}
          // Con el clickHandler
          onClick={clickHandler}
        >
          Decrementar
        </button>

        <button
          className="btn btn-danger"
          /* onClick={()=>{ 
      // Si vamos a modificar el valor de un estado que no depende de su valor anterior le pasamos el valor directamente setContador(0) 
      setContador(0)
      }} */
          // Damos valores para diferenciar bien cada boton
          value={"resetear"}
          // Con el clickHandler
          onClick={clickHandler}
        >
          Resetear
        </button>

        <button
          className="btn btn-danger"
          value={"setear"}
          onClick={clickHandler}
        >
          Setear
        </button>

        <p>
          El valor actual del contador es <span>{contador}</span>
        </p>
      </div>

      {/* Si queremos usar el data de la funcion podriamos hacer. Uso de paso de parametros de clase */}
      {/* <p>Los datos pasados son {data}</p> */}
    </>
  );
};

// Al estar exportado desde el componente App.tsx podemos ir y llamarlo.
export default Home;
