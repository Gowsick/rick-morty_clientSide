import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { CharactersList } from './Characters';
import { LocationsList } from './Locations';
import { EpisodesList } from './Episodes';
import { Episode } from './Episode';
import { Header } from './Header';

export class Main extends Component {
    
    render() {
            return(
                <Router>
                    <div>
                    <Header/>
                    <Route path="/" exact component={CharactersList} />
                    <Route path="/locations/" component={LocationsList} />
                    <Route path="/episodes/" component={EpisodesList} />
                    <Route path="/episode/" render={(props) => <Episode {...props}/>} />
                    </div>
                </Router>
            );
        }
    }

export default Main;