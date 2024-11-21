package salt.tobias.meal.recipe.service;

import org.springframework.stereotype.Service;
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

    public List<MealServings> getRecipes(){
        return recipes;
    }

    public boolean saveRecipes(double[] servings, Recipe[] recipes, long id){



        List<MealServings> newRecipes = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            newRecipes.add(new MealServings(servings[i],recipes[i]));
        }
        this.recipes = newRecipes;
        return true;
    }

}
