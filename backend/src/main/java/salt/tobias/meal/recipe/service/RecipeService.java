package salt.tobias.meal.recipe.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Service
public class RecipeService {

    private List<MealServings> recipes = new ArrayList<>(Arrays.asList(
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0")),
            new MealServings(0, new RecipeItem("select", "", "", "0"))
        ));

    public List<MealServings> getRecipes(){
        return recipes;
    }

    public boolean saveRecipes(double[] servings, RecipeItem[] recipes){



        List<MealServings> newRecipes = new ArrayList<>();
        for (int i = 0; i < 7; i++) {
            newRecipes.add(new MealServings(servings[i],recipes[i]));
        }
        this.recipes = newRecipes;
        return true;
    }

}
