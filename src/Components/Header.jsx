import React, { Component } from 'react';
import { Link } from "react-router-dom";

export class Header extends Component {
    
    render() {
            return(
                    <nav>
                        <ul>
                        <li>
                            <Link to="/">Characters</Link>
                        </li>
                        <li>
                            <Link to="/locations/">Locations</Link>
                        </li>
                        <li>
                            <Link to="/episodes/">Episodes</Link>
                        </li>
                        </ul>
                    </nav>
            );
        }
    }

export default Header;