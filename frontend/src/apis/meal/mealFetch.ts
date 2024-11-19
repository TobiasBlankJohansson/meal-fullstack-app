import { mealItem } from "../../types/meal";

export type mealFetch = {
  servings: number;
  meal: mealItem;
};

const emptyMeal: mealItem = {
  title: "select",
  ingredients: "",
  instructions: "",
  servings: "0",
};

export const getMeals = async (): Promise<mealFetch[]> => {
  const fetchMeal = await fetch("http://localhost:8080/api/recipes");
  if (!fetchMeal.ok) {
    throw new Error();
  }
  return await fetchMeal.json();
};

type postMealsProp = {
  servings: number[];
  meal: mealItem[];
};

export const postMeals = async ({
  servings,
  meal,
}: postMealsProp): Promise<boolean> => {
  const fetchMeal = await fetch("http://localhost:8080/api/recipes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      servings,
      meal,
    }),
  });
  if (!fetchMeal.ok) {
    throw new Error();
  }
  return await fetchMeal.json();
};
