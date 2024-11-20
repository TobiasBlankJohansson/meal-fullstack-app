package salt.tobias.meal.recipeApi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "recipe_search")
public class RecipeSearch {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne(optional = false)
    @JoinColumn(name="recipe_id")
    private Recipe recipe;

    @ManyToOne(optional = false)
    @JoinColumn(name = "search_id")
    private Search search;

    public RecipeSearch() {
    }

    public RecipeSearch(Recipe recipe, Search search) {
        this.recipe = recipe;
        this.search = search;
    }
}
