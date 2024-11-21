package salt.tobias.meal.recipe.service;

import org.springframework.stereotype.Service;
import salt.tobias.meal.recipe.model.Week;
import salt.tobias.meal.recipeApi.model.Recipe;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class RecipeService {

    private final WeekRepository weekRepo;

    private List<MealServings> recipes = new ArrayList<>(Arrays.asList(
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0"))
    ));

    public RecipeService(WeekRepository weekRepo) {
        this.weekRepo = weekRepo;
    }

    public List<MealServings> getRecipes() {
        return recipes;
    }

    public boolean saveRecipes(long[] servings, Recipe[] recipes, long id) {
        Week week = weekRepo.findById(id).get();
        for (int i = 0; i < 7; i++) {
            week.addRecipeSearch(recipes[i], servings[i], i);
        }
        return true;
    }

}
