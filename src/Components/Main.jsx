import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CharactersList } from './Characters';
import { Header } from './common/Header';

export class Main extends Component {
    
    render() {
            return(
                <Router>
                    <div>
                    <Header/>
                    <Route path="/" exact component={CharactersList} />
                    </div>
                </Router>
            );
        }
    }

export default Main;