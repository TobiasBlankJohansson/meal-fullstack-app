package salt.tobias.meal.recipe.controller;

import salt.tobias.meal.recipeApi.model.Recipe;

public record RecipeDto(double servings,Recipe recipe) {
}
