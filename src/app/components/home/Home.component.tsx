import React, {Component} from "react";
import MainMenu from "../navigations/MainMenu.component";
import MyRecipes from "../my-recipes/MyRecipes.component";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from "../login/Login.component";

export class Home extends Component {

    render() {
        return (
            <section className='full-height'>
                <MainMenu/>
                <main role="main" className="container">
                    <Route path="/my-recipes" component={MyRecipes} />
                    <Route path="/login" exact component={Login} />
                </main>

            </section>
        );
    }
}

export default Home