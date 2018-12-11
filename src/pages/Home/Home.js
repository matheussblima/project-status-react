import React, { Component } from 'react';
import { Menu, ProjectDetails, List } from '../../components';
import { Col, Row, Container } from 'reactstrap';
import styles from './Home.module.css'


class Home extends Component {
    render() {
        return(
            <div className={styles.body}>
                <Menu />
                {/* DETALHES */}
                <Row>
                    <Col>
                        <ProjectDetails title="FEL 1" />
                    </Col>
                    <Col>
                        <ProjectDetails title="FEL 2" />
                    </Col>
                    <Col>
                        <ProjectDetails title="FEL 3" />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <ProjectDetails title="Execução" />
                    </Col>
                    <Col>
                        <ProjectDetails title="Operação" />
                    </Col>
                </Row>
                <List />
            </div>
        );
    }
}

export default Home;