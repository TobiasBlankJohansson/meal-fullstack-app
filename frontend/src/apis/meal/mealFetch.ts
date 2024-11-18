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
  return [
    { servings: 0, meal: emptyMeal },
    { servings: 1, meal: emptyMeal },
    { servings: 2, meal: emptyMeal },
    { servings: 3, meal: emptyMeal },
    { servings: 4, meal: emptyMeal },
    { servings: 5, meal: emptyMeal },
    {
      servings: 6,
      meal: {
        title: "banan",
        ingredients:
          "3 1/2 c Chicken broth; homemade|1 lb Fresh spinach; wash/trim/chop|1 Egg|1 c Grated parmesan cheese; --or--|1 c Romano cheese; freshly grated|Salt and pepper; to taste",
        instructions: "",
        servings: "2",
      },
    },
  ];
};

type postMealsProp = {
  servings: number[];
  meal: mealItem[];
};

export const postMeals = async ({
  servings,
  meal,
}: postMealsProp): Promise<boolean> => {
  return true;
};
