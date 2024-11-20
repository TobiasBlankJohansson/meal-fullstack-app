package salt.tobias.meal.recipe.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import salt.tobias.meal.recipe.service.MealServings;
import salt.tobias.meal.recipe.service.RecipeService;

import java.util.List;

@Controller
@CrossOrigin
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping
    public ResponseEntity<List<MealServings>> getRecipes(){
        return ResponseEntity.ok(recipeService.getRecipes());
    }

    @PostMapping
    public ResponseEntity<Boolean> saveRecipes(@RequestBody RecipeRequestDto recipeRequestDto){
        return ResponseEntity.accepted().body(recipeService.saveRecipes(recipeRequestDto.servings(),recipeRequestDto.recipes()));
    }
}
