package salt.tobias.meal.recipeApi.service;

import salt.tobias.meal.recipe.service.RecipeItem;

import java.util.ArrayList;
import java.util.List;

public class recipeApiService {

    private List<RecipeItem> recipes = new ArrayList<>();
    private List<RecipeSearch> searches = new ArrayList<>();

    private record RecipeSearch(String searchWordPage, List<RecipeItem> recipes) {}

    public List<RecipeItem> getRecipe(String searchWord, int page) {
        if(searchWord.equals("random")){
            return recipes;
        }
        if(searches.contains(searchWord+page)){
            return recipes;
        }
        var recipePage = fetchRecipes(searchWord, page);
        var recipeNextPage = fetchRecipes(searchWord, page+1);

        searches.add(new RecipeSearch(searchWord+page, recipePage));
        searches.add(new RecipeSearch(searchWord+(page+1), recipeNextPage));
        recipePage.addAll(recipeNextPage);
        return recipePage;
    }

    private List<RecipeItem> fetchRecipes(String searchWord, int page) {
    }

}
