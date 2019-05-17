import React, {Component} from 'react';
import './App.css';
import Home from '../components/home/Home.component';
import { BrowserRouter as Router} from 'react-router-dom';
import { Provider } from "inversify-react";
import diContainer from "../core/ioc/container";

class App extends Component{
    render(){
        return (

            <Provider container={diContainer}>
                <div className="App">
                    <Router>
                        <Home/>
                    </Router>
                </div>
            </Provider>
        );
    }
}

export default App;
