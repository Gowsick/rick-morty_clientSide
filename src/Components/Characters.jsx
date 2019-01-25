import React, { Component } from 'react';
import { ListEpisodes } from './listEpisodes';
import fetchData from '../Helpers/Fetcher';


export class CharactersList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextpage: 0,
            characters: [],
            isLoaded: false
        }
    }

    _getData(param) {
        fetchData('character', param)
            .then(res => res.data)
            .then((data)=>this.setState(() => ({
                nextpage: data.info.next.slice(data.info.next.lastIndexOf('/') + 1),
                characters: this.state.characters.concat(data.results),
                isLoaded: true
        })))
    }

    componentDidMount() {
        this._getData()
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    render() {
        const { isLoaded, characters } = this.state;
        console.log(this.state);
        if (!isLoaded) {
            return <div>Chill it's loading...</div>
        } else {
            //const episodeURL = `{character.episode.slice(-1)}`;
            return(
                <React.Fragment>
                    <p>List</p>
                    {characters.map(character => (
                        <li key={character.id}>
                            <img src={character.image} alt=''/>
                            <p>{character.name}</p>
                            <p>{character.status}</p>
                            <p>{character.species}</p>
                            <p>{character.location.name}</p>
                            <h4>Episodes:</h4>
                            <ListEpisodes list={character.episode.slice(-1)}/>
                            <hr/>
                        </li>
                        ))}
                    <button onClick={()=>this._getData(this.state.nextpage)}>Load More...</button>
                </React.Fragment>
                );
        }
    }
}

export default CharactersList;