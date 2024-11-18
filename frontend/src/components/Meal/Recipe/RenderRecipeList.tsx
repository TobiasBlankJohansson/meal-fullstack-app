import { mealItem } from "../../../types/meal";
import { MealRecipeItem } from "./MealRecipeItem";

type renderRecipeListProp = {
  meals: mealItem[];
  recipeCount: number;
  setMeal: React.Dispatch<React.SetStateAction<mealItem[]>>;
  mealSelect: number;
};

export function RenderRecipeList({
  mealSelect,
  meals,
  recipeCount,
  setMeal,
}: renderRecipeListProp) {
  const arrLength = meals.length - recipeCount;
  let count = 10;
  if (arrLength < 9) {
    count = arrLength;
  }
  const returnMeals: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    console.log(meals[i]);
    returnMeals.push(
      <MealRecipeItem
        meal={meals[i]}
        mealSelect={mealSelect}
        setMeal={setMeal}
      ></MealRecipeItem>
    );
  }
  return returnMeals;
}
