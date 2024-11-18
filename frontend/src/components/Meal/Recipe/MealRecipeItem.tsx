import { mealItem } from "../../../types/meal";

type mealRecipeItemProp = {
  meal: mealItem;
  setMeal: React.Dispatch<React.SetStateAction<mealItem[]>>;
  mealSelect: number;
  setSelectedMeal: React.Dispatch<React.SetStateAction<number>>;
};

export function MealRecipeItem({
  meal,
  setMeal,
  mealSelect,
  setSelectedMeal,
}: mealRecipeItemProp) {
  return (
    <>
      <li className="flex justify-between items-center my-1">
        <button
          className="btn btn-ghost"
          onClick={() => document.getElementById("meal-details").showModal()}
        >
          {meal.title}
        </button>
        <form method="dialog">
          <button
            className="btn btn-md"
            onClick={() => {
              setMeal((prev) => {
                prev[mealSelect] = meal;
                return [...prev];
              });
            }}
          >
            Pick food
          </button>
        </form>
      </li>
      <hr />
    </>
  );
}
