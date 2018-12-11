import React, { Component } from 'react';
import { Menu, ProjectDetails, GroupProjectDetails , List } from '../../components';
import { Col } from 'reactstrap';
import styles from './Home.module.css'


class Home extends Component {
    render() {
        return(
            <div>
                {/* NAVBAR */}
                <Menu />

                {/* DETALHES */}
                <Col className={styles.details_container} sm="12" md={{ size: 10, offset: 1 }}>                
                    <GroupProjectDetails>
                        <ProjectDetails title="FEL 1" color="#20d077"/>
                        <ProjectDetails title="FEL 2" color="#f9c851"/>
                        <ProjectDetails title="FEL 3" color="#007be5"/>
                        <ProjectDetails title="Execução" color="#ef6262" />
                        <ProjectDetails title="Operação"/>
                    </GroupProjectDetails>
                </Col>
                
                {/* LISTA DE PROJETOS */}
                <List />
            </div>
        );
    }
}

export default Home;