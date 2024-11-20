import { useEffect, useState } from "react";
import { mealItem } from "../../../types/meal";
import { MealDetails } from "./MealDetails";
import { RenderRecipeList } from "./RenderRecipeList";
import { getRecipe } from "../../../apis/recipe/recipeFetch";

type mealRecipeProp = {
  setMeal: React.Dispatch<React.SetStateAction<mealItem[]>>;
  mealSelect: number;
};

export function MealRecipe({ setMeal, mealSelect }: mealRecipeProp) {
  const [recipeCount, SetRecipeCount] = useState<number>(0);
  const [selectedMeal, setSelectedMeal] = useState<number>(0);
  const [recipes, setRecipes] = useState<mealItem[]>([]);

  useEffect(() => {
    const getRecipes = async () => {
      const fetchRecipes = await getRecipe();
      setRecipes(() => fetchRecipes);
    };
    getRecipes();
  }, []);

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
          <form
            className="my-2"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <label className="input input-bordered flex items-center gap-2">
              <input type="text" className="grow" placeholder="Search" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </form>
          <hr></hr>
          <main>
            <ol>
              {RenderRecipeList({
                mealSelect: mealSelect,
                meals: recipes,
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
            {recipeCount * 10 < recipes.length - 10 && (
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
      {recipes.length != 0 && (
        <MealDetails meal={recipes[selectedMeal]}></MealDetails>
      )}
    </>
  );
}
