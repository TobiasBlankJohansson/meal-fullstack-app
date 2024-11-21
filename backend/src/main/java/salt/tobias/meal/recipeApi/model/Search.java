package salt.tobias.meal.recipeApi.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Search {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String word;
    private long page;

    @OneToMany(mappedBy = "search", cascade = {CascadeType.MERGE, CascadeType.REMOVE})
    private List<RecipeSearch> recipeSearch;

    public Search() {
    }

    public Search(String word, long page, List<RecipeSearch> recipeSearch) {
        this.word = word;
        this.page = page;
        this.recipeSearch = recipeSearch;
    }

    public long getId() {
        return id;
    }

    public String getWord() {
        return word;
    }

    public long getPage() {
        return page;
    }

    public void addRecipeSearch(Recipe recipe) {
        RecipeSearch newRecipe = new RecipeSearch(recipe, this);
        recipeSearch.add(newRecipe);
    }

    public List<RecipeSearch> getRecipeSearch() {
        return recipeSearch;
    }
}
