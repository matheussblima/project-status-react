import React, { Component } from 'react';
import { Menu } from '../../components';
import './styles.css'

class Home extends Component {
    render() {
        return(
            <div className="body">
                <Menu />
            </div>
        );
    }
}

export default Home;