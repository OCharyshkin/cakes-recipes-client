import {Container} from "inversify";
import {IRecipeService} from "../../services/recipes/recipe.service.interface";
import TYPES from "./types";
import RecipeService from "../../services/implementation/recipes/recipe.service";
import "reflect-metadata";

const diContainer = new Container();

diContainer.bind<IRecipeService>(TYPES.Recipe).to(RecipeService);

export default diContainer;