import { useState } from "react";
import { mealItem } from "../../../types/meal";
import { MealDetails } from "./MealDetails";
import { RenderRecipeList } from "./RenderRecipeList";

type mealRecipeProp = {
  setMeal: React.Dispatch<React.SetStateAction<mealItem[]>>;
  mealSelect: number;
};

export function MealRecipe({ setMeal, mealSelect }: mealRecipeProp) {
  const [recipeCount, SetRecipeCount] = useState<number>(0);
  const [selectedMeal, setSelectedMeal] = useState<number>(0);

  return (
    <>
      <dialog id="meal-recipe" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <header className="flex justify-center">
            <h3 className="text-2xl font-bold">Select food</h3>
          </header>
          <hr></hr>
          <main>
            <ol>
              {RenderRecipeList({
                mealSelect: mealSelect,
                meals: mealMock,
                recipeCount: recipeCount,
                setMeal: setMeal,
                setSelectedMeal: setSelectedMeal,
              })}
            </ol>
          </main>
          <footer className="grid grid-cols-3 justify-center items-center">
            {recipeCount != 0 && (
              <button
                className="btn btn-ghost text-2xl font-bold"
                onClick={() => SetRecipeCount((prev) => prev - 1)}
              >
                {"<"}
              </button>
            )}
            <p className="m-5 text-2xl font-bold flex justify-center col-start-2">
              {recipeCount + 1}
            </p>
            {recipeCount * 10 < mealMock.length - 10 && (
              <button
                className="btn btn-ghost text-2xl font-bold"
                onClick={() => SetRecipeCount((prev) => prev + 1)}
              >
                {">"}
              </button>
            )}
          </footer>
        </div>
      </dialog>
      <MealDetails meal={mealMock[selectedMeal]}></MealDetails>
    </>
  );
}
