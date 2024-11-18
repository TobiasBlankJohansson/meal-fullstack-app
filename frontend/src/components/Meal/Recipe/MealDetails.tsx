import { mealItem } from "../../../types/meal";

type mealDetailsProp = {
  meal: mealItem;
};

export function MealDetails({
  title,
  ingredients,
  instructions,
  servings,
}: mealItem) {
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
            <h2 className="font-bold text-lg">{title}</h2>
          </header>
          <hr></hr>
          <h3 className="py-4">Servings</h3>
          <p>{servings}</p>
          <h3 className="py-4">Ingredients</h3>
          <ol>
            {ingredients.split("|").map((ingr) => (
              <li>{ingr}</li>
            ))}
          </ol>
          <h3 className="py-4">Instructions</h3>
          <p>{instructions}</p>
        </div>
      </dialog>
    </>
  );
}
