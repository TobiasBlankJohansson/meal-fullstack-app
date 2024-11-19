import { getMeals, mealFetch } from "../../apis/meal/mealFetch";

export async function getMeal() {
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
        if (!ingredientSplit[1].includes("1")) {
          buyList.push(ingredientSplit.join(" "));
          return;
        }

        const devide = ingredientSplit[1].split("/");
        ingredientSplit[0] =
          Math.round(
            ((Number(ingredient[0]) + Number(devide[0]) / Number(devide[1])) /
              count) *
              Number(servings) *
              10
          ) /
            10 +
          "";
        ingredientSplit[1] = "";
        buyList.push(ingredientSplit.join(" "));
      });
  });
  return buyList.sort();
}
