package salt.tobias.meal.recipe.controller;

import salt.tobias.meal.recipeApi.model.Recipe;

public record RecipeRequestDto(double[] servings, Recipe[] recipes) {

}
