package salt.tobias.meal.recipeApi.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonMappingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestClient;
import org.springframework.web.client.RestClientException;
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
    private final String key;

    public RecipeApiService(RecipeRepository recipeRepo, SearchRepository searchRepo,@Value("${api.ninja.key}") String key) {
        this.recipeRepo = recipeRepo;
        this.searchRepo = searchRepo;
        this.key = key;

        if (!recipeRepo.existsByTitleAndServings("empty", "0")) {
            recipeRepo.save(new Recipe("empty", "Free", "I'm a empty meal if you don't need dinner this day", "0"));
        }
    }

    public List<Recipe> getRecipe(String searchWord, int page) {

        if (searchWord.contains("random")) {
            return recipeRepo.findAll();
        }

        List<Recipe> recipes = new ArrayList<>();
        recipes.addAll(getPage(searchWord, page));
        recipes.addAll(getPage(searchWord, page + 1));

        return recipes;
    }

    private List<Recipe> getPage(String searchWord, int page) {
        if (searchRepo.existsByWordAndPage(searchWord, page)) {
            return searchRepo.findByWordAndPage(searchWord, page)
                    .getRecipeSearch().stream()
                    .map(RecipeSearch::getRecipe).toList();
        }

        var recipePage = fetchRecipes(searchWord, page).stream().map(recipe -> {
            if (recipeRepo.existsByTitleAndServings(recipe.getTitle(), recipe.getServings())) {
                return recipeRepo.findByTitleAndServings(recipe.getTitle(), recipe.getServings());
            }
            return recipeRepo.save(recipe);
        }).toList();

        Search search = searchRepo.save(new Search(searchWord, page, new ArrayList<>()));
        recipePage.forEach(search::addRecipeSearch);

        searchRepo.save(search);
        return recipePage;
    }

    private List<Recipe> fetchRecipes(String searchWord, int page) {

        RestClient client = RestClient.create();
        try {
            String response = client.get()
                    .uri("https://api.api-ninjas.com/v1/recipe?query=" + searchWord + "&offset=" + page)
                    .header("X-Api-Key", key)
                    .retrieve()
                    .body(String.class);
            ObjectMapper objectMapper = new ObjectMapper();
            return objectMapper.readValue(response, objectMapper.getTypeFactory().constructCollectionType(List.class, Recipe.class));
        } catch (RestClientException | IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
