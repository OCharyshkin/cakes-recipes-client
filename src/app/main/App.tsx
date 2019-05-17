import React, {Component} from 'react';
import './App.css';
import Home from '../components/home/Home.component';
import { BrowserRouter as Router} from 'react-router-dom';

class App extends Component{
    render(){
        return (
            <div className="App">
                <Router>
                    <Home/>
                </Router>
            </div>
        );
    }
}

export default App;
