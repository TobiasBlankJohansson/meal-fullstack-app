package salt.tobias.meal.recipe.model;

import jakarta.persistence.*;

import java.util.List;

@Entity
public class Week {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    private String week;

    @OneToMany(mappedBy = "week")
    private List<RecipeItem> recipeItem;
}
