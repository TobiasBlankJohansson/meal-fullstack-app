import { useState } from "react";
import { MealRecipe } from "./Recipe/MealRecipe";
import { WeekFormItem } from "./WeekFormItem";
import { mealItem } from "../../types/meal";

const week: string[] = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const emptyMeal: mealItem = {
  title: "select",
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
  
  return (
    <section>
      <header className="flex flex-col items-center">
        <h2 className="mb-2 text-4xl text-primary font-bold ">Weeks</h2>
        <hr className="w-2/4"></hr>
      </header>
      <form className="flex flex-col items-center">
        {week.map((day) => {
          return <WeekFormItem day={day}></WeekFormItem>;
        })}
        <button className="btn btn-secondary hover:btn-primary hover:text-base-100 mt-5 w-1/2 h-16 text-2xl text-base-100 mb-10">
          Save
        </button>
      </form>
      <MealRecipe></MealRecipe>
    </section>
  );
}
