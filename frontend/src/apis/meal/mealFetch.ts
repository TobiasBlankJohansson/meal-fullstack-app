import { mealItem } from "../../types/meal";

type meal = {
  servings: number;
  meal: mealItem;
};

const emptyMeal: mealItem = {
  title: "select",
  ingredients: "",
  instructions: "",
  servings: "0",
};

export const getMeals = async (): Promise<meal[]> => {
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
        ingredients: "",
        instructions: "",
        servings: "2",
      },
    },
  ];
};
