import Home from "./pages/Home"


// Tiene que cumplir de formaobligatoria es que la funcion retorna un html
function App() {
  

  return (
    <>
    {/* Para darle estilos a todos podemos usar className en un div que envuelva las llamdas a componentes */}
    <div className="container m-4">


    { /* Llamada a otros componentes. Podemos buscar por su nombre y luego corregir o escribir <Home /> o <Home></Home> y aceptar para la importación */ }
    <Home  />

    {/* Paso de parametros del home.  */}
    {/* <Home data="2" /> */}
    

    </div>
    
    
      
    </>
  )
}

export default App
