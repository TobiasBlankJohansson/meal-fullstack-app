package salt.tobias.meal.recipeApi.service;

import org.springframework.data.repository.CrudRepository;
import salt.tobias.meal.recipeApi.model.Recipe;

public interface RecipeRepository extends CrudRepository<Recipe, Long> {
}
