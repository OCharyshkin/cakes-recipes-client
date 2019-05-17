import React, {Component} from "react";
import RecipesList from "./RecipesList.component";
import {IRecipe} from "../../models/recipes/Recipe";
import {IRecipeService} from "../../services/recipes/recipe.service.interface";
import {inject} from "inversify";
import TYPES from "../../core/ioc/types";

type MyRecipesState = {
    recipes: IRecipe[]
};

class MyRecipes extends Component<any, MyRecipesState> {

    // @ts-ignore
    @inject(TYPES.Recipe) private recipeService: IRecipeService;

    componentWillMount(): void {

        this.recipeService
            .getList()
            .subscribe(recipes => {
                const state = {
                    recipes: recipes
                };

                this.setState(state);
            });
    }

    render() {
        const recipes = !!this.state.recipes ? this.state.recipes : [];

        return (
            <div>
                <div className='jumbotron'></div>
                <RecipesList recipes={recipes}/>
            </div>
        );
    }
}

export default MyRecipes;