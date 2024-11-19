import { getMeals, mealFetch } from "../../apis/meal/mealFetch";

export async function getMeal() {
  const meals: mealFetch[] = await getMeals();
  const buyList: string[] = [];

  function scaleFraction(
    numerator: number,
    denominator: number,
    servings: number,
    count: number
  ): number {
    console.log(numerator, denominator, servings, count);
    console.log((numerator / denominator / count) * Number(servings) * 100);
    return (
      Math.round((numerator / denominator / count) * Number(servings) * 100) /
      100
    );
  }

  function processIngredient(
    ingredient: string,
    servings: number,
    count: number
  ): string {
    const ingredientParts = ingredient.split(" ");
    let quantity = ingredientParts[0];

    if (quantity.includes("/")) {
      console.log(quantity);
      const [numerator, denominator] = quantity.split("/").map(Number);
      const scaledQuantity = scaleFraction(
        numerator,
        denominator,
        servings,
        count
      );
      console.log(scaledQuantity);
      ingredientParts[0] = scaledQuantity.toString();
      return ingredientParts.join(" ");
    }

    if (ingredientParts[1]?.includes("/")) {
      const [numerator, denominator] = ingredientParts[1]
        .split("/")
        .map(Number);
      const scaledQuantity = scaleFraction(
        numerator,
        denominator,
        servings,
        count
      );
      ingredientParts[0] = (
        Number(ingredientParts[0]) + scaledQuantity
      ).toString();
      ingredientParts.splice(1, 1);
      return ingredientParts.join(" ");
    }
    ingredientParts[0] =
      Math.round((Number(quantity) / count) * Number(servings) * 100) / 100 +
      "";
    return ingredientParts.join(" ");
  }

  meals.forEach((meal) => {
    const { servings, ingredients } = meal.meal;
    const count = meal.servings;

    if (!ingredients) return;

    ingredients
      .split("|")
      .map((ingredient) => ingredient.split(";")[0])
      .forEach((ingredient) => {
        buyList.push(processIngredient(ingredient, Number(servings), count));
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
