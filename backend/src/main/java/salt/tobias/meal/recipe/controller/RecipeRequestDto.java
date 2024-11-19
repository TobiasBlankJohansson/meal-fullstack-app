package salt.tobias.meal.recipe.controller;

public record RecipeRequestDto(Number[] serving,RecipeItemDto[] recipeItemDto) {
    private record RecipeItemDto(String title, String ingredients, String instructions, String servings) {
    }
}
