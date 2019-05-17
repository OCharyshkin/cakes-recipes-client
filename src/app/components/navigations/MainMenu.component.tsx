import React, {Component} from "react";
import {Link} from "react-router-dom";
import MenuLocalization from "../../common/localization/menu.localization";

export class MainMenu extends Component{

    render(){
        return (
            <nav className='navbar fixed-top navbar-expand-md navbar-light bg-light'>
                <div className="container">
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link to={`/`} className='nav-link'>{MenuLocalization.home}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/my-recipes`}  className='nav-link'>{MenuLocalization.myRecipes}</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/login`}  className='nav-link'>{MenuLocalization.login}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default MainMenu;