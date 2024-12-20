import { useEffect, useState } from "react";
import { MealRecipe } from "./Recipe/MealRecipe";
import { WeekFormItem } from "./WeekFormItem";
import { mealItem } from "../../types/meal";
import { getMeals, meal, postMeals } from "../../apis/meal/mealFetch";
import { toast } from "react-toastify";

const week: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const count: number[] = [0, 1, 2, 3, 4, 5, 6];

const emptyMeal: mealItem = {
  title: "empty",
  ingredients: "",
  instructions: "",
  servings: "0",
};

export function MealWeek() {
  const [meal, setMeal] = useState<mealItem[]>([
    emptyMeal,
    emptyMeal,
    emptyMeal,
    emptyMeal,
    emptyMeal,
    emptyMeal,
    emptyMeal,
  ]);
  const [mealSelect, setMealSelect] = useState<number>(0);
  const [servings, setServings] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);
  const [change, setChange] = useState<boolean>(false);

  useEffect(() => setChange(() => true), [mealSelect, servings]);

  useEffect(() => {
    const getMeal = async () => {
      const meals: meal[] = await getMeals();
      const mealArr: mealItem[] = [];
      const servingArr: number[] = [];
      count.forEach((i) => {
        mealArr.push(meals[i].recipe);
        servingArr.push(meals[i].servings);
      });
      setMeal(() => mealArr);
      setServings(() => servingArr);
    };
    getMeal();
  }, []);

  return (
    <section className="pb-20">
      <header className="flex flex-col items-center">
        <h2 className="mb-2 text-4xl text-primary font-bold ">
          Dinner planner
        </h2>
        <hr className="w-2/4 border-t-2 border-primary"></hr>
      </header>
      <form
        className="flex flex-col items-center"
        onSubmit={(e) => {
          e.preventDefault();
          toast.info("saving...");

          const save = async () => {
            try {
              await postMeals({ servings, recipes: meal });
              toast.dismiss();
              toast.success("Saved!");
              setChange(() => false);
            } catch (error) {}
          };
          save();
        }}
      >
        {count.map((count) => (
          <WeekFormItem
            count={count}
            day={week[count]}
            meal={meal[count]}
            servings={servings[count]}
            setMealSelect={setMealSelect}
            setServings={setServings}
            key={"WeekFormItem:" + count}
          ></WeekFormItem>
        ))}
        <button
          className={`btn btn-primary ${
            !change && "btn-disabled"
          } hover:btn-primary hover:text-base-100 mt-5 w-1/2 h-16 text-2xl text-base-100 mb-10`}
          type="submit"
        >
          Save
        </button>
      </form>
      <MealRecipe mealSelect={mealSelect} setMeal={setMeal}></MealRecipe>
    </section>
  );
}
