import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { CharactersList } from './Characters';
import { LocationsList } from './Locations';
import { EpisodesList } from './Episodes';
import { Episode } from './Episode';
import { Header } from './common/Header';

export class Main extends Component {
    
    render() {
        const Characters = () => <h5>List Characters</h5>;
        const Locations = () => <h5>List Locations</h5>;
        const Episodes = () => <h5>List Episodes</h5>;
            return(
                <Router>
                    <div>
                    <Header/>
                    <Route path="/" exact component={CharactersList} />
                    <Route path="/locations/" component={LocationsList} />
                    <Route path="/episodes/" component={EpisodesList} />
                    <Route path="/episode/" component={Episode} />
                    </div>
                </Router>
            );
        }
    }

export default Main;