import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends Component {
    
    render() {
        return(
            <div className='header'>
                <div className='title'><p>Ricky & Morty <span>database</span></p></div>
                    <input
                        placeholder='Search...'
                        onChange={this.handleInputChange}
                    />
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Characters</Link>
                            </li>
                        </ul>
                    </nav>
            </div>
        );
    }
}

export default Header;