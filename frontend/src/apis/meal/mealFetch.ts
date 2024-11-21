import { mealItem } from "../../types/meal";

type fetchMeal ={
  recipe:meal[]
}

export type meal = {
  servings: number;
  recipe: mealItem;
};

export const getMeals = async (): Promise<meal[]> => {
  const fetchMeal = await fetch("http://localhost:3000/api/recipes/1");
  if (!fetchMeal.ok) {
    throw new Error();
  }
  const recipe:fetchMeal = await fetchMeal.json()
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
  console.log(recipes);
  const fetchMeal = await fetch("http://localhost:3000/api/recipes/1", {
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
