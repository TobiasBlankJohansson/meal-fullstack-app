package salt.tobias.meal.recipe.service;

import org.springframework.data.repository.ListCrudRepository;
import salt.tobias.meal.recipe.model.Week;

import java.util.Optional;

public interface WeekRepository extends ListCrudRepository<Week, Long> {
}
