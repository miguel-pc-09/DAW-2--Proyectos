export type Drink = {
  strDrink: string;
  strDrinkThumb: string;
  idDrink: string;
};

export type DrinkResponse = {
  drinks: Drink[];
};

export type DrinkDetailResponse = {
  drinks: DrinkDetail[];
};

export type DrinkDetail = {
  idDrink: string;
  strDrink: string;
  strTags: string;
  strVideo: null;
  strCategory: string;
  strIBA: string;
  strAlcoholic: string;
  strGlass: string;
  strInstructions: string;
  strInstructionsES: string;
  strInstructionsDE: string;
  strInstructionsFR: string;
  strInstructionsIT: string;
  strDrinkThumb: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
};
