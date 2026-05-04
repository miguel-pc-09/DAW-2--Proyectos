import React, { useEffect, useState } from "react";
import type { Drink, DrinkResponse } from "../models/DrinksModels";

import CocktailItem from "../components/CocktailItem";

const List = () => {
  // Definimos el useState para poder llevar la lista de cocktails
  const [cocktails, setCocktails] = useState<Drink[]>([]);

  // Lo primero para hacer una consulta a una url, 1º funcion fetch. Y como queremos que lo haga nada mas arrangar usaremos el hook useEffect
  useEffect(() => {
    // Lo que se realiza cuando se detecte un efecto (actualizacion)
    // Peticion a la url
    const cocktailsFetch = async () => {
      const cocktailAPI = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic",
      );
      // Respuesta de la API a la peticion
      const cocktailResponse: DrinkResponse = await cocktailAPI.json();

      setCocktails(cocktailResponse.drinks);
      // console.log(cocktailResponse.drinks);
    };

    // LLAmada a la funcion de cocktailsFetch
    cocktailsFetch();

    /* return () => {
        // La funcion de callback ejecutada despues del efecto
        second
      } */
    // El elemento que lanza el efecto. Si lo dejamos [] se ejecuta una sola vez. Si va a camvbiar meteremos counter para que se ejecute cuando cambie
  }, []);

  return (
    <div>
      <h1>Lista de Cocktails</h1>
      <ul className="list-group">
        {/* Capturar la lista de cocktail de me ha dado el api y hacer un li por cada uno */}
        {/* {cocktails.map((data: Drink) => (
          <li className="list-group-item d-flex justify-content-between">
            <img src={data.strDrinkThumb} width="50"></img>
            {data.strDrink}
            <Link to={"/detail"} className="btn btn-primary">
              Detalle
            </Link>
          </li>
        ))} */}
        {cocktails.map((data: Drink) => (
          <CocktailItem key={data.idDrink} drink={data} />
        ))}
      </ul>
    </div>
  );
};

export default List;
