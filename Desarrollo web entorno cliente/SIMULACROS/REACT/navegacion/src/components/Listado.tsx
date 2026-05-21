const Listado = () => {
  const nombres: string[] = [
    "Miguel",
    "Laura",
    "Carlos",
    "Ana",
    "Sergio",
    "Lucía",
  ];

  return (
    <div className="container mt-4">
      <h1>Listado de nombres</h1>

      <ul className="list-group">
        {nombres.map((nombre) => (
          <li className="list-group-item" key={nombre}>
            {nombre}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listado;
