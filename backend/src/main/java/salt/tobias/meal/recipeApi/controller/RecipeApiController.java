package salt.tobias.meal.recipeApi.controller;
import org.springframework.web.bind.annotation.*;
import salt.tobias.meal.recipe.service.RecipeItem;
import salt.tobias.meal.recipeApi.service.RecipeApiService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/recipeApi")
public class RecipeApiController {

    public final RecipeApiService recipeApiService;

    public RecipeApiController(RecipeApiService recipeApiService) {
        this.recipeApiService = recipeApiService;
    }

    @GetMapping("/{searchWord}/{page}")
    public List<RecipeItem> recipeApi(@PathVariable String searchWord, @PathVariable int page) {
        return recipeApiService.getRecipe(searchWord,page);
    }

}