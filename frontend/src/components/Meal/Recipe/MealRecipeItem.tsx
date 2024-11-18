export function MealRecipeItem() {
  return (
    <>
      <li className="flex justify-between items-center my-1">
        <button
          className="btn btn-ghost"
          onClick={() => document.getElementById("meal-details").showModal()}
        >
          {mealMock[0].title}
        </button>
        <form method="dialog">
          <button
            className="btn btn-md"
            onClick={() => {
              setMeal((prev) => {
                prev[mealSelect] = mealMock[0];
                return [...prev];
              });
            }}
          >
            Pick food
          </button>
        </form>
      </li>
    </>
  );
}
