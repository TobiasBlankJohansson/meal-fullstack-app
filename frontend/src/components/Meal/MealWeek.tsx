import { useEffect, useState } from "react";
import { MealRecipe } from "./Recipe/MealRecipe";
import { WeekFormItem } from "./WeekFormItem";
import { mealItem } from "../../types/meal";
import { getMeals, mealFetch, postMeals } from "../../apis/meal/mealFetch";

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
  const [mealSelect, setMealSelect] = useState<number>(0);
  const [servings, setServings] = useState<number[]>([0, 0, 0, 0, 0, 0, 0]);

  useEffect(() => {
    const getMeal = async () => {
      const meals: mealFetch[] = await getMeals();
      const mealArr: mealItem[] = [];
      const servingArr: number[] = [];
      count.forEach((i) => {
        mealArr.push(meals[i].meal);
        servingArr.push(meals[i].servings);
      });
      setMeal(() => mealArr);
      setServings(() => servingArr);
    };
    getMeal();
  }, []);

  return (
    <section>
      <header className="flex flex-col items-center">
        <h2 className="mb-2 text-4xl text-primary font-bold ">Weeks</h2>
        <hr className="w-2/4"></hr>
      </header>
      <form className="flex flex-col items-center">
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
          className="btn btn-secondary hover:btn-primary hover:text-base-100 mt-5 w-1/2 h-16 text-2xl text-base-100 mb-10"
          onClick={(e) => {
            e.preventDefault();
            const save = async () => {
              const postFetch = await postMeals({ servings, meal });
            };
            save();
          }}
        >
          Save
        </button>
      </form>
      <MealRecipe mealSelect={mealSelect} setMeal={setMeal}></MealRecipe>
    </section>
  );
}
