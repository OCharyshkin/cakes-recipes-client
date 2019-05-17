import React, {Component} from "react";
import {IRecipe} from "../../models/recipes/Recipe";

type RecipesListItemProps = {
    recipe: IRecipe;
};

type RecipesListItemState = {
    recipe: IRecipe;
};

class RecipesListItem extends Component<RecipesListItemProps, RecipesListItemState> {

    constructor(props: Readonly<RecipesListItemProps>) {
        super(props);

        this.state = {
            recipe: props.recipe
        };

        console.log(this.state);
    }

    render() {
        const {recipe} = this.state;

        console.log(recipe);

        return (<li key={recipe.id} className="list-group-item">{recipe.title}</li>);
    }
}

export default RecipesListItem;