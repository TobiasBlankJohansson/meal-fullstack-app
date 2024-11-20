import { mealItem } from "../../types/meal";
import { mealFetch } from "../meal/mealFetch";

type GetRecipeProp = {
  recipeCount: number;
  recipeSearch: string;
};

export const getRecipe = async ({
  recipeCount,
  recipeSearch,
}: GetRecipeProp): Promise<mealFetch[]> => {
  if (recipeSearch == "") {
    recipeSearch = "random";
  }
  const fetchMeal = await fetch(
    `http://localhost:8080/api/recipeApi/${recipeSearch}/${recipeCount}`
  );
  if (!fetchMeal.ok) {
    throw new Error();
  }
  return await fetchMeal.json();
};
