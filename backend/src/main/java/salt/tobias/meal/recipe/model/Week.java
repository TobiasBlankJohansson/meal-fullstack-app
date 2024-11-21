package salt.tobias.meal.recipe.model;

import jakarta.persistence.*;
import salt.tobias.meal.recipeApi.model.Recipe;

import java.util.List;

@Entity

public class Week {
    @Id
    private Long id;

    @OneToMany(mappedBy = "week", cascade = {CascadeType.MERGE, CascadeType.REMOVE} ,orphanRemoval = true)
    private List<RecipeItem> recipeItem;

    public Week() {
    }

    public Week(Long week, List<RecipeItem> recipeItem) {
        this.id = week;
        this.recipeItem = recipeItem;
    }

    public Long getWeek() {
        return id;
    }

    public List<RecipeItem> getRecipeItem() {
        return recipeItem;
    }
    public void emptyRecipeItem() {
        for (RecipeItem item : recipeItem) {
            item.setWeek(null);
        }
        recipeItem.clear();
    }
    public void addRecipeSearch(Recipe recipe, long servings, int index) {
        RecipeItem newRecipe = new RecipeItem(servings, recipe, this);
        recipeItem.add(index, newRecipe);
    }

}
