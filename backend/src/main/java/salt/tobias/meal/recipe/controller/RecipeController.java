package salt.tobias.meal.recipe.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import salt.tobias.meal.recipe.model.Week;
import salt.tobias.meal.recipe.service.RecipeService;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/recipes")
public class RecipeController {

    private final RecipeService recipeService;

    public RecipeController(RecipeService recipeService) {
        this.recipeService = recipeService;
    }

    @GetMapping("{id}")
    public ResponseEntity<RecipeResponseDto> getRecipes(@PathVariable long id){
        Week week = recipeService.getWeek(id);
        return ResponseEntity.ok(RecipeResponseDto.weekToRecipeResponseDto(week));
    }

    @PostMapping("{id}")
    public ResponseEntity<Boolean> saveRecipes(@PathVariable long id,
            @RequestBody RecipeRequestDto recipeRequestDto){
        return ResponseEntity.accepted().body(recipeService.saveRecipes(
                recipeRequestDto.servings(),
                recipeRequestDto.recipes(),
                id));
    }
}
