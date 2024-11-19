import { getMeals, mealFetch } from "../../apis/meal/mealFetch";

export async function getMeal() {
  const meals: mealFetch[] = await getMeals();
  const buyList: string[] = [];

  function processIngredient(
    ingredient: string,
    servings: number,
    count: number
  ): string {
    const ingredientParts = ingredient.split(" ");

    if (!ingredientParts[1].includes("1")) {
      return ingredient;
    }

    const [numerator, denominator] = ingredientParts[1].split("/").map(Number);
    const scaledQuantity =
      Math.round(
        ((numerator / denominator + Number(ingredientParts[0])) / count) *
          servings *
          10
      ) / 10;

    ingredientParts[0] = scaledQuantity.toString();
    ingredientParts[1] = "";
    return ingredientParts.join(" ");
  }

  meals.forEach((meal) => {
    const { servings, ingredients } = meal.meal;
    const count = meal.servings;

    if (!ingredients) return;

    ingredients
      .split("|")
      .map((ingredient) => {
        return ingredient.includes(";") ? ingredient.split(";")[0] : ingredient;
      })
      .forEach((ingredient) => {
        buyList.push(processIngredient(ingredient, servings, count));
      });
  });

  return combineIngredients(buyList);
}

function combineIngredients(input: string[]): string[] {
  const ingredientMap: { [key: string]: { quantity: number; unit: string } } =
    {};

  for (let item of input) {
    const parts = item.split(" ");
    const quantity = parseFloat(parts[0]);

    if (isNaN(quantity)) {
      continue;
    }

    const unit = parts[1];
    const ingredient = parts.slice(2).join(" ");

    if (ingredientMap[ingredient]) {
      ingredientMap[ingredient].quantity += quantity;
    } else {
      ingredientMap[ingredient] = { quantity, unit };
    }
  }

  const result: string[] = [];
  for (let ingredient in ingredientMap) {
    const { quantity, unit } = ingredientMap[ingredient];
    result.push(`${quantity} ${unit} ${ingredient}`);
  }

  return result;
}
