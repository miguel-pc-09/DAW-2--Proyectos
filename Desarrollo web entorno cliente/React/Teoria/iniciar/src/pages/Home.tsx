// Escribiremos rafce para crear la funcion flecha rapido
import React from 'react'

/* Uso de paso de parametros de clase dentro de const Home = (data)   */
const Home = () => {

   // Definicion de variable para guardar por ejemplo mi nombre y meterlo dentro del return
   const nombre = "Miguel"
   // Definicion de variable "contador" para usarla con el useState. Nos saltara un aviso diciendo que declaramos una variable pero no la estamos usando.
   let contador = 10;

  // Aqui no podemos crear otra funcion
  // const miFuncion = () => {}; no dara un error pero alerta"is assigned a value but never used" porque no se esta usando esa funcion
  return (
    <>
    <h1>Home contador</h1>
    <p>Este primer componente ha sido desarrolado por {nombre} para definir el uso de useState</p>

    {/* uso de useState */}
    <div className='mt-3 mb-3'>
      {/* Tenemos dos formas de ejecutar la funcion, con un onClick y definimos una funcion arriba y aqui llamamos sin (), o inline la creamos aqui mismo onClick={()=>{}}} */}
    <button className='btn btn-primary' 
    onClick={()=>{
      console.log("Pulsado boton decremento");

       contador++;
      }}>Incrementar</button>

    <button 
    className='btn btn-secondary' 
    onClick={()=>{ 
      console.log("Pulsado boton decremento");

      contador--;}}>Decrementar
      </button>

    <p>El valor actual del contador es <span>{contador}</span></p>
    </div>
    

    {/* Si queremos usar el data de la funcion podriamos hacer. Uso de paso de parametros de clase */}
    {/* <p>Los datos pasados son {data}</p> */}

    </>
  )
}

// Al estar exportado desde el componente App.tsx podemos ir y llamarlo. 
export default Home