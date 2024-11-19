package salt.tobias.meal.recipe.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

@Controller
@CrossOrigin
@RequestMapping("/api/recipes")
public class RecipeController {

    @GetMapping
    public ResponseEntity<String> getRecipes(){
        return ResponseEntity.ok("[{\"servings\":0,\"meal\":{\"title\":\"select\",\"ingredients\":\"\",\"instructions\":\"\",\"servings\":\"0\"}},{\"servings\":0,\"meal\":{\"title\":\"select\",\"ingredients\":\"\",\"instructions\":\"\",\"servings\":\"0\"}},{\"servings\":0,\"meal\":{\"title\":\"select\",\"ingredients\":\"\",\"instructions\":\"\",\"servings\":\"0\"}},{\"servings\":0,\"meal\":{\"title\":\"select\",\"ingredients\":\"\",\"instructions\":\"\",\"servings\":\"0\"}},{\"servings\":0,\"meal\":{\"title\":\"select\",\"ingredients\":\"\",\"instructions\":\"\",\"servings\":\"0\"}},{\"servings\":2,\"meal\":{\"title\":\"Moosewood Eggplant and Randomness\",\"ingredients\":\"2 md Eggplants (about 7*inches|Long)|3/4 \\\"milk\\\" (use your preferred|Vlf option)|2 c Fine bread crumbs or wheat|Germ (or a combination)|1 ts Basil|1/2 ts Each: oregano and thyme|1 Batch italian tomato sauce|(there is a recipe listed in|The book, but|Feel free to use your own|Premade or personal sauce)|1 lb \\\"mozzarella cheese\\\"|1/2 c \\\"parmesan cheese\\\"\",\"servings\":\"8 Servings\",\"instructions\":\"preheat oven to 375 degrees. either lightly lube (oil, pam, whatever) a baking tray and a 9x13 inch pan or use non-stick versions of the same. cut the eggplants into circles 1/2 \\\" thick. place the milk in a shallow bowl; combine bread crumbs and/or wheat germ with herbs on a plate. dip each eggplant slice in the milk, moistening both sides, then cover both sides thoroughly with the crumb mix. spread the prepped slices on the baking tray and pan , and bake for approx. 20-30 minutes (or until tender). remove from oven, and pile them gently on the the baking sheet. then, without cleaning the pan, ladle some tomato sauce into the pan and spread out over the bottom. add a layer of eggplant slices and cover them with more sauce. spread some mozzarella over the sauce, and repeat the layering process until you runo out of either room or ingredients. sprinkle the top with lots of parmesan. bake uncovered for about 40 minutes, or until heated through and bubbling around the edges. remove from oven and let sit for about 10 minutes beofre serving. 1.80á\"}},{\"servings\":2,\"meal\":{\"title\":\"banan\",\"ingredients\":\"1/2 lb Ground beef|1/2 lb Ground veal|1/4 c Italian seasoned bread crumb|1 Egg|1 tb Parsley|Salt and pepper to taste|4 c Chicken broth|2 c Spinach leaves cut into piec|1/4 c Grated Pecorino Romano chees\",\"instructions\":\"\",\"servings\":\"2\"}}]"
        );
    }

    @PostMapping
    public ResponseEntity<Boolean> saveRecipes(@RequestBody RecipeRequestDto recipeRequestDto){
        return ResponseEntity.accepted().body(true);
    }
}
