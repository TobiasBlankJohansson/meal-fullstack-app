package salt.tobias.meal.recipe.service;

import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

import static com.fasterxml.jackson.databind.cfg.CoercionInputShape.Array;

@Service
public class RecipeService {

    public List<MealServings> getRecipes(){
        List<MealServings> recipes = new ArrayList<>();
        recipes.add(new MealServings(0, new RecipeItem("select", "", "", "0")));
        recipes.add(new MealServings(0, new RecipeItem("select", "", "", "0")));
        recipes.add(new MealServings(0, new RecipeItem("select", "", "", "0")));
        recipes.add(new MealServings(0, new RecipeItem("select", "", "", "0")));
        recipes.add(new MealServings(0, new RecipeItem("select", "", "", "0")));
        recipes.add(new MealServings(2, new RecipeItem(
                "Moosewood Eggplant and Randomness",
                "2 md Eggplants (about 7*inches|Long)|3/4 \"milk\" (use your preferred|Vlf option)|2 c Fine bread crumbs or wheat|Germ (or a combination)|1 ts Basil|1/2 ts Each: oregano and thyme|1 Batch italian tomato sauce|(there is a recipe listed in|The book, but|Feel free to use your own|Premade or personal sauce)|1 lb \"mozzarella cheese\"|1/2 c \"parmesan cheese\"",
                "preheat oven to 375 degrees. either lightly lube (oil, pam, whatever) a baking tray and a 9x13 inch pan or use non-stick versions of the same. cut the eggplants into circles 1/2 \" thick. place the milk in a shallow bowl; combine bread crumbs and/or wheat germ with herbs on a plate. dip each eggplant slice in the milk, moistening both sides, then cover both sides thoroughly with the crumb mix. spread the prepped slices on the baking tray and pan , and bake for approx. 20-30 minutes (or until tender). remove from oven, and pile them gently on the the baking sheet. then, without cleaning the pan, ladle some tomato sauce into the pan and spread out over the bottom. add a layer of eggplant slices and cover them with more sauce. spread some mozzarella over the sauce, and repeat the layering process until you runo out of either room or ingredients. sprinkle the top with lots of parmesan. bake uncovered for about 40 minutes, or until heated through and bubbling around the edges. remove from oven and let sit for about 10 minutes beofre serving. 1.80á",
                "8 Servings"
        )));
        recipes.add(new MealServings(2, new RecipeItem(
                "banan",
                "1/2 lb Ground beef|1/2 lb Ground veal|1/4 c Italian seasoned bread crumb|1 Egg|1 tb Parsley|Salt and pepper to taste|4 c Chicken broth|2 c Spinach leaves cut into piec|1/4 c Grated Pecorino Romano chees",
                "",  // No instructions provided in the mock
                "2"
        )));
        return recipes;
    }

    public boolean saveRecipes(double[] Servings, RecipeItem[] recipes){
        return true;
    }

}
