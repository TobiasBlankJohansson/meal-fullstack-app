package salt.tobias.meal.recipe.controller;

import salt.tobias.meal.recipe.model.Week;
import salt.tobias.meal.recipeApi.model.Recipe;

import java.util.ArrayList;
import java.util.List;

public record RecipeResponseDto(List<RecipeDto> recipe) {
    public static RecipeResponseDto weekToRecipeResponseDto(Week week){
        List<RecipeDto> list = new ArrayList<>();
        week.getRecipeItem().stream().sorted((a,b) -> Math.toIntExact(a.getId() - b.getId())).forEach(recipeItem -> {
            RecipeDto recipe = new RecipeDto(recipeItem.getServings(),recipeItem.getRecipe());
            list.add(recipe);
        });
        return new RecipeResponseDto(list);
    }
}
