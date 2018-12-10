import React, { Component } from 'react';
import { Menu, ProjectDetails } from '../../components';
import styles from './Home.module.css'


class Home extends Component {
    render() {
        return(
            <div className={styles.body}>
                <Menu />
                <ProjectDetails />
            </div>
        );
    }
}

export default Home;