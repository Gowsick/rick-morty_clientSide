import React, { Component } from 'react';
import { CharacterList } from './CharacterList';


export class Main extends Component {

    render() {

            return(
                <React.Fragment>
                <ul>
                <CharacterList />
                </ul>
                
                </React.Fragment>
                );
        }
    }

export default Main;