package salt.tobias.meal.recipe.model;

import jakarta.persistence.*;
import salt.tobias.meal.recipeApi.model.Recipe;

@Entity
public class RecipeItem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private long servings;

    @ManyToOne(optional = false)
    @JoinColumn(name = "recipe_id")
    private Recipe recipe;

    @ManyToOne(optional = false)
    @JoinColumn(name = "week_id")
    private Week week;
}
