import { meal } from "../meal/mealFetch";

const PATH = import.meta.env.VITE_BACKEND_PATH;

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
    `${PATH}/api/recipeApi/${recipeSearch}/${recipeCount}`
  );
  if (!fetchMeal.ok) {
    throw new Error();
  }
  return await fetchMeal.json();
};
