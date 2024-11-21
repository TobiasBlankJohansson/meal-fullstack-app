package salt.tobias.meal.recipe.model;

import jakarta.persistence.*;
import salt.tobias.meal.recipeApi.model.Recipe;

import java.util.List;

@Entity
public class Week {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String week;

    @OneToMany(mappedBy = "week")
    private List<RecipeItem> recipeItem;

    public Week() {
    }

    public Week(String week, List<RecipeItem> recipeItem) {
        this.week = week;
        this.recipeItem = recipeItem;
    }

    public long getId() {
        return id;
    }

    public String getWeek() {
        return week;
    }

    public List<RecipeItem> getRecipeItem() {
        return recipeItem;
    }

    public void addRecipeSearch(Recipe recipe, long servings, int index) {
        RecipeItem newRecipe = new RecipeItem(servings, recipe, this);
        recipeItem.add(index, newRecipe);
    }

}
