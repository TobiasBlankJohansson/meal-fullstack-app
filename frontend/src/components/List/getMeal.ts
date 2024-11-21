import { getMeals, meal } from "../../apis/meal/mealFetch";

export async function getMeal() {
  const meals: meal[] = await getMeals();
  const buyList: string[] = [];

  function scaleFraction(
    numerator: number,
    denominator: number,
    servings: number,
    count: number
  ): number {
    console.log((numerator / denominator / Number(servings)) * count);
    return (
      Math.round((numerator / denominator / Number(servings)) * count * 100) /
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
      const [numerator, denominator] = quantity.split("/").map(Number);
      const scaledQuantity = scaleFraction(
        numerator,
        denominator,
        servings,
        count
      );
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
      Math.round((Number(quantity) / Number(servings)) * count * 100) / 100 +
      "";
    return ingredientParts.join(" ");
  }

  meals.forEach((meal) => {
    const { servings, ingredients } = meal.recipe;
    const count = meal.servings;

    if (!ingredients || count == 0) return;

    ingredients
      .split("|")
      .map((ingredient) => ingredient.split(";")[0])
      .forEach((ingredient) => {
        buyList.push(
          processIngredient(ingredient, controllServings(servings), count)
        );
      });
  });

  return combineIngredients(buyList);
}

function controllServings(servings: string): number {
  return servings.split(" ").map(Number)[0];
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
