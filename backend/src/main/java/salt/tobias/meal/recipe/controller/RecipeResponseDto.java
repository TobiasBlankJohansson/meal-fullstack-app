package salt.tobias.meal.recipe.controller;

import salt.tobias.meal.recipe.service.MealServings;

import java.util.List;

public record RecipeResponseDto(List<MealServings> meals) {
}
