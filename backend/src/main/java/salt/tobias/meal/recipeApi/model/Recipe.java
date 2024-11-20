package salt.tobias.meal.recipeApi.model;

import jakarta.persistence.*;
import salt.tobias.meal.recipe.model.RecipeItem;

import java.util.List;

@Entity
public class Recipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String title;
    private String ingredients;
    private String instructions;
    private String servings;

    @OneToMany(mappedBy = "recipe")
    private List<RecipeSearch> recipeSearch;

    @OneToMany(mappedBy = "recipe")
    private List<RecipeItem> recipeItem;

    public Recipe() {
    }

    public Recipe(String title, String ingredients, String instructions, String servings) {
        this.title = title;
        this.ingredients = ingredients;
        this.instructions = instructions;
        this.servings = servings;
    }

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public String getIngredients() {
        return ingredients;
    }

    public String getInstructions() {
        return instructions;
    }

    public String getServings() {
        return servings;
    }
}
