import {Container} from "inversify";
import {IRecipeService} from "../../services/recipes/recipe.service.interface";
import TYPES from "./types";
import RecipeService from "../../services/implementation/recipes/recipe.service";
import "reflect-metadata";

const container = new Container();

container.bind<IRecipeService>(TYPES.Recipe).to(RecipeService);

export default container;