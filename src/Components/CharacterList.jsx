import React, { Component } from 'react';
import { Episodes } from './Episodes';
import { Locations } from './Locations';
import episodeURL from './Episodes';


export class CharacterList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            characters: [],
            isLoading: false
        }
    }

    componentDidMount() {
        fetch('https://rickandmortyapi.com/api/character/')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: true,
                    characters: json
                })
            });
    }

    render() {
        const { isLoading, characters } = this.state;

        if (!isLoading) {
            return <div>Chill it's loading...</div>
        } else {
            const episodeURL = `{character.episode.slice(-1)}`;
            return(
                <React.Fragment>
                    {characters.results.map(character => (
                        <li key={character.id}>
                            <img src={character.image} alt=''/>
                            <p>{character.name}</p>
                            <p>{character.status}</p>
                            <p>{character.species}</p>
                            <p>{character.location.name}</p>
                            <Episodes/>
                            <hr/>
                        </li>
                        ))}
                
                </React.Fragment>
                );
        }
    }
}

export default CharacterList;