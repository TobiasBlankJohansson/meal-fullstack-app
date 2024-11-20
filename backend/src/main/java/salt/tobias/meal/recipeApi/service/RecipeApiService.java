package salt.tobias.meal.recipeApi.service;

import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.stereotype.Service;
import salt.tobias.meal.recipe.service.RecipeItem;
import salt.tobias.meal.recipeApi.model.Recipe;
import salt.tobias.meal.recipeApi.model.RecipeSearch;
import salt.tobias.meal.recipeApi.model.Search;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

@Service
public class RecipeApiService {

    private final RecipeRepository recipeRepo;
    private final SearchRepository searchRepo;

    private final List<RecipeSearch> searches = new ArrayList<>();

    public RecipeApiService(RecipeRepository recipeRepo, SearchRepository searchRepo) {
        this.recipeRepo = recipeRepo;
        this.searchRepo = searchRepo;
    }
    public List<Recipe> getRecipe(String searchWord, int page) {

        if(searchWord.contains("random")){
            return recipeRepo.findAll();
        }

        List<Recipe> recipes = new ArrayList<>();
        recipes.addAll(getPage(searchWord, page));
        recipes.addAll(getPage(searchWord, page+1));

        return recipes;
    }

    private List<Recipe> getPage(String searchWord, int page){
        if(searchRepo.existsByWordAndPage(searchWord,page)){
            return searchRepo.findByWordAndPage(searchWord,page)
                    .getRecipeSearch().stream()
                    .map(RecipeSearch::getRecipe).toList();
        }
        var recipePage = fetchRecipes(searchWord, page);
        Search search = new Search(searchWord, page);

        assert recipePage != null;
        recipePage.forEach(search::addRecipeSearch);

        searchRepo.save(search);
        return recipePage;
    }

    private List<Recipe> fetchRecipes(String searchWord, int page) {

        String jsonData = "[ {\"title\": \"Fresh Mozzarella, Italian Sausage and Roasted Pepper Calzon\", \"ingredients\": \"1 Ball of basic pizza dough (enough dough for 1 pizza)|1 tb Olive oil|Salt and white pepper|1/2 c Thick pesto|1/2 c Roasted garlic|1 c Diced Italian sausage, cooked|1 Red pepper, roasted, peeled, seeded and julienned|2 tb Chiffonade of basil|4 sl (1/2-inch) fresh Mozzarella cheese|1 Egg, beaten|1 c Spicy tomato sauce, hot|2 tb Grated Parmigiano-Reggiano cheese|1 tb Chopped chives|1 tb Brunoise red peppers\", \"servings\": \"2 Servings\", \"instructions\": \"Preheat the oven to 500 degrees. Place the dough out onto a floured surface. Roll the dough out to form a 12-inch circle. Spread the pesto over one half of the dough. Layer the garlic, sausage, peppers, and basil, alternately over the pesto. Lay the Mozzarella cheese over the basil. Fold the other side of the dough over the filling and pinch the edges to seal the calzone. Make three slashes across the top of the calzone. Place the calzone on a parchment-lined baking sheet. Brush the calzone with the egg wash. Bake for 20 to 25 minutes or until golden. Spoon the sauce in the center of the plate. Slice the calzone in half and place in the center of the sauce. Garnish with the grated cheese, chives and brunoise peppers.\" }, {\"title\": \"Grandma Demaio's Italian Stew\", \"ingredients\": \"1 lb Italian sausage; or hot dogs|4 lg Tomatoes; peeled and sliced*|1 lg Green pepper; sliced|2 Zucchini; sliced|2 lg Potatoes; sliced|1 lg Maui onion; sliced|3 Cloves garlic; pressed|2 ts Sweet basil|1 ts Oregano|1 ts Parsley|1 ts Salt|1/2 ts Pepper\", \"servings\": \"6 servings\", \"instructions\": \"* or 2-14oz cans This is a very easy recipe. Simply brown the sausage, add all the veggies and cook for about an hour over a low flame. The stew should simmer, but never reach a hard boil. When Grandma didn't have sausage, she often used hot dogs, which we just loved! My husband's grandmother used to make this stew during the harvest season. She and Grandpa lived on a small farm and all the veggies and herbs were grown on the farm. Grandma also made her own Italian sausage. Although I find this rendition a fair imitation, nothing can compare with Grandma's Stew (can't even remember the correct name for it). Grandma DeMaio's stew was lovingly preparred on top of a wood burning stove! How we all loved it! Per serving: 329 Calories (kcal); 24g Total Fat; (65% calories from fat); 13g Protein; 16g Carbohydrate; 58mg Cholesterol; 921mg Sodium Food Exchanges: 1/2 Grain(Starch); 1 1/2 Lean Meat; 1 1/2 Vegetable; 0 Fruit; 4 Fat; 0 Other Carbohydrates\" } ]";

        ObjectMapper objectMapper = new ObjectMapper();
        try {
            return objectMapper.readValue(jsonData, objectMapper.getTypeFactory().constructCollectionType(List.class, RecipeItem.class));
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
