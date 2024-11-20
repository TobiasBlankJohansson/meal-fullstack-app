package salt.tobias.meal.recipeApi.service;

import org.springframework.data.repository.ListCrudRepository;
import salt.tobias.meal.recipeApi.model.Recipe;
import salt.tobias.meal.recipeApi.model.Search;

import java.util.Collection;
import java.util.List;

public interface SearchRepository extends ListCrudRepository<Search,Long> {
    boolean existsByWordAndPage(String word, long page);

    Search findByWordAndPage(String word, long page);
}
