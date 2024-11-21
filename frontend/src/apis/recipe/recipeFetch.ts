import { meal } from "../meal/mealFetch";

type GetRecipeProp = {
  recipeCount: number;
  recipeSearch: string;
};

export const getRecipe = async ({
  recipeCount,
  recipeSearch,
}: GetRecipeProp): Promise<meal[]> => {
  if (recipeSearch == "") {
    recipeSearch = "random";
  }
  const fetchMeal = await fetch(
    `http://localhost:3000/api/recipeApi/${recipeSearch}/${recipeCount}`
  );
  if (!fetchMeal.ok) {
    throw new Error();
  }
  return await fetchMeal.json();
};
