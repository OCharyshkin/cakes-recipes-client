import {IRecipe} from "../../models/recipes/Recipe";
import {Observable} from "rxjs";

export interface IRecipeService {
    getList(): Observable<IRecipe[]>;
}
