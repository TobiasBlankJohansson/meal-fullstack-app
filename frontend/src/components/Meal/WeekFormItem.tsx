import { mealItem } from "../../types/meal";

type weekFormItemProp = {
  day: string;
  count: number;
  meal: mealItem;
  servings: number;
  setServings: React.Dispatch<React.SetStateAction<number[]>>;
  setMealSelect: React.Dispatch<React.SetStateAction<number>>;
};

export function WeekFormItem({
  day,
  count,
  meal,
  servings,
  setServings,
  setMealSelect,
}: weekFormItemProp) {
  return (
    <section className="mt-5 w-1/2 grid grid-cols-3 gap-10">
      <label className="text-neutral text-2xl">{day}</label>
      <input
        type="number"
        placeholder={servings + ""}
        className="input w-full max-w-xs border-neutral focus:ring-primary focus:border-primary"
        min={0}
        onChange={(input) =>
          setServings((prev) => {
            prev[count] = Number(input.target.value);
            return prev;
          })
        }
      />
      <button
        className="btn btn-primary hover:bg-secondary"
        onClick={(e) => {
          e.preventDefault();
          setMealSelect(() => count);
          document.getElementById("my_modal_3").showModal();
        }}
      >
        {meal.title}
      </button>
    </section>
  );
}
