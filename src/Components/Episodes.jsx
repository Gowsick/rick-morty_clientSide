import React, { Component } from 'react';


export class Episodes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            episodes: [],
            isLoading: false
        }
    }

    fetchEpisodes(episodeURL) {
        fetch(episodeURL)
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoading: true,
                    episodes: json
                })
            });
    }

    render() {
        const { isLoading, episodes } = this.state;

        if (!isLoading) {
            return <div>Chill it's loading...</div>
        } else {
            return(
                <React.Fragment>
                    {episodes.results.map(episode => (
                        <li key={episode.id}>
                            <p>{episode.name}</p>

                            <hr/>
                        </li>
                        ))}
                
                </React.Fragment>
                );
        }
    }
}

export default Episodes;