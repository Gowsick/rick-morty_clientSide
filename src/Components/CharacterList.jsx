import React, { Component } from 'react';


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
            return(
                <React.Fragment>
                <ul>
                    {characters.results.map(character => (
                        <li key={character.id}>
                            <img src={character.image} alt=''/>
                            <p>{character.name}</p>
                            <p>{character.status}</p>
                            <p>{character.species}</p>
                            <p>{character.location.name}</p>
                            <p>{character.episode.slice(-1)}</p>
                            <hr/>
                        </li>
                        ))}
                </ul>
                
                </React.Fragment>
                );
        }
    }
}

export default CharacterList;