import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type { DrinkDetail, DrinkDetailResponse } from "../models/DrinksModels";

const Detail = () => {
  const { id } = useParams<{ id: string }>();

  const [cocktail, setCocktail] = useState<DrinkDetail>();

  useEffect(() => {
    const detailFetch = async () => {
      const detailReponse = await fetch(
        "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=" + id,
      );

      const detailJSON: DrinkDetailResponse = await detailReponse.json();

      setCocktail(detailJSON.drinks[0]);
    };

    detailFetch();
  }, []);

  return (
    <div>
      Detail
      <p>{id}</p>
      <p>{cocktail?.strDrink}</p>
      <p>{cocktail?.strCategory}</p>
    </div>
  );
};

export default Detail;
