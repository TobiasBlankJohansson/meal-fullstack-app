package salt.tobias.meal.recipeApi.service;

import org.springframework.data.repository.ListCrudRepository;
import salt.tobias.meal.recipeApi.model.Search;

public interface SearchRepository extends ListCrudRepository<Search,Long> {
    boolean existsByWordAndPage(String word, long page);
}
