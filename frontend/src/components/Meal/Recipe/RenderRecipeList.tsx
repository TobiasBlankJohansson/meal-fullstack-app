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
        setSelectedMeal={setSelectedMeal}
        arrayCount={recipeCount + i}
      ></MealRecipeItem>
    );
  }
  return returnMeals;
}
