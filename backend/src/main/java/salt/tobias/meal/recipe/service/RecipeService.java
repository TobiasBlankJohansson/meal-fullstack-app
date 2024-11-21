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

    public RecipeService(WeekRepository weekRepo, RecipeRepository recipeRepo) {
        this.weekRepo = weekRepo;
        this.recipeRepo = recipeRepo;
    }

    public Week getWeek(long id) {
        if(!weekRepo.findById(id).isPresent()) {
            Week week = weekRepo.save(new Week(id, new ArrayList<>()));
            Recipe empty = recipeRepo.findById((long) 1).get();
            for (int i = 0; i < 7; i++) {
                week.addRecipeSearch(empty, 0, i);
            }
            return weekRepo.save(week);
        }
        return weekRepo.findById(id).get();
    }

    public boolean saveRecipes(long[] servings, Recipe[] recipes, long id) {
        weekRepo.delete(weekRepo.findById(id).get());
        Week week = weekRepo.save(new Week(id, new ArrayList<>()));
        for (int i = 0; i < 7; i++) {
            week.addRecipeSearch(recipes[i], servings[i], i);
        }
        weekRepo.save(week);
        return true;
    }

}
