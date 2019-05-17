import React, {Component} from "react";
import {IRecipe} from "../../models/recipes/Recipe";
import RecipesListItem from "./RecipesListItem.component";

type RecipesListProps = {
    recipes: IRecipe[]
}

type RecipesListState = {
    recipes: IRecipe[]
}

class RecipesList extends Component<RecipesListProps, RecipesListState> {

    constructor(props: Readonly<RecipesListProps>) {
        super(props);

        this.state = {
            recipes: props.recipes
        }
    }

    render() {

        const items = this.state.recipes.map(x => <RecipesListItem key={x.id} recipe={x}/>);

        return (
            <ul className='list-group'>
                {items}
            </ul>
        );
    }
}

export default RecipesList;