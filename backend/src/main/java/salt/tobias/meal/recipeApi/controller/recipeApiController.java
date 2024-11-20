package salt.tobias.meal.recipeApi.controller;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import salt.tobias.meal.recipe.service.RecipeItem;
import salt.tobias.meal.recipeApi.service.recipeApiService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/recipeApi")
public class recipeApiController {

    public final recipeApiService recipeApiService;

    public recipeApiController(recipeApiService recipeApiService) {
        this.recipeApiService = recipeApiService;
    }

    @GetMapping("/{searchWord}/{page}")
    public List<RecipeItem> recipeApi(@PathVariable String searchWord, @PathVariable int page) {
        return recipeApiService.getRecipe(searchWord,page);
    }

}
