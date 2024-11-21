package salt.tobias.meal.recipeApi.service;

import org.springframework.data.repository.ListCrudRepository;
import salt.tobias.meal.recipeApi.model.Recipe;

public interface RecipeRepository extends ListCrudRepository<Recipe, Long> {
    boolean existsByTitleAndServings(String title, String servings);

    Recipe findByTitleAndServings(String title, String servings);
}
