import { mealItem } from "../../types/meal";

const PATH = import.meta.env.VITE_BACKEND_PATH;

type fetchMeal = {
  recipe: meal[];
};

export type meal = {
  servings: number;
  recipe: mealItem;
};

export const getMeals = async (): Promise<meal[]> => {
  const fetchMeal = await fetch(`${PATH}/api/recipes/1`);
  if (!fetchMeal.ok) {
    throw new Error();
  }
  const recipe: fetchMeal = await fetchMeal.json();
  return recipe.recipe;
};

type postMealsProp = {
  servings: number[];
  recipes: mealItem[];
};

export const postMeals = async ({
  servings,
  recipes,
}: postMealsProp): Promise<boolean> => {
  const fetchMeal = await fetch(`${PATH}/api/recipes/1`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      servings,
      recipes,
    }),
  });
  if (!fetchMeal.ok) {
    throw new Error();
  }
  return await fetchMeal.json();
};
