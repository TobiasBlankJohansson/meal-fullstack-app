package salt.tobias.meal.recipe.controller;

import salt.tobias.meal.recipe.service.RecipeItem;

public record RecipeRequestDto(double[] serving, RecipeItem[] recipeItemDto) {

}
