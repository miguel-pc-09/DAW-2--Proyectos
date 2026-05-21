import { Link, Route, Routes } from "react-router-dom";
import Calculadora from "./components/Calculadora";
import Listado from "./components/Listado";

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">
            React App
          </Link>

          <div className="navbar-nav">
            <Link className="nav-link" to="/">
              Calculadora
            </Link>

            <Link className="nav-link" to="/listado">
              Listado
            </Link>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Calculadora />} />
        <Route path="/listado" element={<Listado />} />
      </Routes>
    </>
  );
}

export default App;
