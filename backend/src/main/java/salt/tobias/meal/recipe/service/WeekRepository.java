package salt.tobias.meal.recipe.service;

import org.springframework.data.repository.CrudRepository;
import salt.tobias.meal.recipe.model.Week;

public interface WeekRepository extends CrudRepository<Week, Long> {
}
