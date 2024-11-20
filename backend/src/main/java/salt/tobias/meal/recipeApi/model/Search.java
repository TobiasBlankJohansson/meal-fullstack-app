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

    @OneToMany(mappedBy = "search")
    private List<RecipeSearch> recipeSearch;

    public Search() {
    }

    public Search(String word, long page) {
        this.word = word;
        this.page = page;
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
}
