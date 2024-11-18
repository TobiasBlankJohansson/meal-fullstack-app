import { useEffect, useState } from "react";
import { getMeals, mealFetch } from "../../apis/meal/mealFetch";

export function GroceryList() {
  const [list, setList] = useState<string[]>([]);

  useEffect(() => {
    const getMeal = async () => {
      const meals: mealFetch[] = await getMeals();
      const buyList: string[] = [];
      meals.forEach((meal) => {
        const servings = meal.meal.servings;
        const ingredients = meal.meal.ingredients;
        const count = meal.servings;
        if (ingredients == "") {
          return;
        }
        ingredients
          .split("|")
          .map((ingredient) => {
            if (ingredient.includes(";")) {
              return ingredient.split(";")[0];
            }
            return ingredient;
          })
          .forEach((ingredient) => {
            const ingredientSplit = ingredient.split(" ");
            if (ingredientSplit[1].includes("1")) {
              const devide = ingredientSplit[1].split("/");
              ingredientSplit[0] =
                Math.round(
                  ((Number(ingredient[0]) +
                    Number(devide[0]) / Number(devide[1])) /
                    count) *
                    Number(servings) *
                    10
                ) /
                  10 +
                "";
              ingredientSplit[1] = "";
            }
            buyList.push(ingredientSplit.join(" "));
          });
      });
      setList(() => buyList);
    };
    getMeal();
  }, []);

  return (
    <section>
      <header className="flex flex-col items-center">
        <h2 className="mb-2 text-4xl text-primary font-bold ">To buy</h2>
        <hr className="w-2/4"></hr>
      </header>
      <main className="flex justify-center">
        <ol className="w-2/4">
          {list.map((item) => (
            <li className="list-disc">{item}</li>
          ))}
        </ol>
      </main>
    </section>
  );
}
