import React, { Component } from 'react';
import fetchData from '../Helpers/Fetcher';


export class LocationsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            locations: [],
            isLoaded: false
        }
    }

    componentDidMount() {
        fetchData('location')
            .then(res => res.data.results)
            .then((data)=>this.setState({
                locations: data,
                isLoaded: true
            }))
    }

    render() {
        const { isLoaded, locations } = this.state;
        console.log(locations);
        if (!isLoaded) {
            return <div>Chill it's loading...</div>
        } else {
            return(
                <React.Fragment>
                    {locations.map(location => (
                        <li key={location.id}>
                            <p>{location.name}</p>
                            <p>{location.type}</p>
                            <p>{location.dimension}</p>
                            <hr/>
                        </li>
                        ))}
                
                </React.Fragment>
                );
        }
    }
}

export default LocationsList;