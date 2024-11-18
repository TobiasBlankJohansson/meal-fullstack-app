import { mealItem } from "../../../types/meal";

type mealDetailsProp = {
  meal: mealItem;
};

export function MealDetails({ meal }: mealDetailsProp) {
  return (
    <>
      <dialog id="meal-details" className="modal">
        <div className="modal-box">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <header>
            <h2 className="font-bold text-lg">{meal.title}</h2>
          </header>
          <hr></hr>
          <h3 className="pt-4 font-bold">Servings</h3>
          <p>{meal.servings}</p>
          <h3 className="pt-4 font-bold">Ingredients</h3>
          <ol>
            {meal.ingredients.split("|").map((ingr) => (
              <li>{ingr}</li>
            ))}
          </ol>
          <h3 className="pt-4 font-bold">Instructions</h3>
          <p>{meal.instructions}</p>
        </div>
      </dialog>
    </>
  );
}
