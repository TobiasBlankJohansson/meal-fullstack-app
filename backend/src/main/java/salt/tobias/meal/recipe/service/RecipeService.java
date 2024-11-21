package salt.tobias.meal.recipe.service;

import org.springframework.stereotype.Service;
import salt.tobias.meal.recipe.model.Week;
import salt.tobias.meal.recipeApi.model.Recipe;
import salt.tobias.meal.recipeApi.service.RecipeRepository;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class RecipeService {

    private final WeekRepository weekRepo;
    private final RecipeRepository recipeRepo;

    private List<MealServings> recipes = new ArrayList<>(Arrays.asList(
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0"))
    ));

    public RecipeService(WeekRepository weekRepo, RecipeRepository recipeRepo) {
        this.weekRepo = weekRepo;
        this.recipeRepo = recipeRepo;
    }

    public Week getWeek(long id) {
        if(!weekRepo.existsById(id)) {
            Week week = weekRepo.save(new Week(id+"",new ArrayList<>()));
            Recipe empty = recipeRepo.findById((long)0).get();
            for (int i = 0; i < 7; i++) {
                week.addRecipeSearch(empty,0,i);
            }
            return weekRepo.save(week);
        }
        return weekRepo.findById(id).get();
    }

    public boolean saveRecipes(long[] servings, Recipe[] recipes, long id) {
        Week week = weekRepo.findById(id).get();
        for (int i = 0; i < 7; i++) {
            week.addRecipeSearch(recipes[i], servings[i], i);
        }
        return true;
    }

}
