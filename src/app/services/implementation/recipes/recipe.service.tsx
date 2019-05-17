import {Observable} from "rxjs";
import {IRecipe} from "../../../models/recipes/Recipe";
import {IRecipeService} from "../../recipes/recipe.service.interface";
import {injectable} from "inversify";

@injectable()
class RecipeService implements IRecipeService{
    getList(): Observable<IRecipe[]> {

        const recipes: IRecipe[] = [
            {
                id: 1, title: 'first',
            },
            {
                id: 2, title: 'second',
            },
            {
                id: 3, title: 'third',
            }
        ];

        return new Observable<IRecipe[]>(
            function (observer) {
                observer.next(recipes);
                observer.complete();
            }
        );
    }
}

export default RecipeService;