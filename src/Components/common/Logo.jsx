import React, { Component } from 'react';
import '../../Stylesheets/_logo.scss';
import logo from '../../Images/logo.png';

export class Logo extends Component {
    
    render() {
        return(
            <React.Fragment>
                <img src={logo} alt='' className='logo'/>
            </React.Fragment>
        );
    }
}

export default Logo;