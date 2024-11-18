import { mealItem } from "../../../types/meal";
import { MealRecipeItem } from "./MealRecipeItem";

type renderRecipeListProp = {
  meals: mealItem[];
  recipeCount: number;
  setMeal: React.Dispatch<React.SetStateAction<mealItem[]>>;
  mealSelect: number;
  setSelectedMeal: React.Dispatch<React.SetStateAction<number>>;
};

export function RenderRecipeList({
  mealSelect,
  meals,
  recipeCount,
  setMeal,
  setSelectedMeal,
}: renderRecipeListProp) {
  const recipe = recipeCount * 10;
  const arrLength = meals.length - recipe;
  let count = 10;
  if (arrLength < 9) {
    count = arrLength;
  }
  const returnMeals: JSX.Element[] = [];
  for (let i = 0; i < count; i++) {
    returnMeals.push(
      <MealRecipeItem
        meal={meals[recipe + i]}
        mealSelect={mealSelect}
        setMeal={setMeal}
        setSelectedMeal={setSelectedMeal}
        arrayCount={recipe + i}
      ></MealRecipeItem>
    );
  }
  return returnMeals;
}
