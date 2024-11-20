package salt.tobias.meal.recipeApi.service;

import salt.tobias.meal.recipe.service.RecipeItem;

import java.util.ArrayList;
import java.util.List;

public class recipeApiService {

    private List<RecipeItem> recipes = new ArrayList<>();

    private record RecipeSearch(String searchWordPage, List<RecipeItem> recipes) {}

    public List<RecipeItem> getRecipe(String searchWord, int page) {
        if(searchWord.equals("random")){
            return recipes;
        }

    }

}
