import React, { Component } from 'react';
import {Row, Col, Card, CardTitle, CardBody } from 'reactstrap';
import styles from './ProjectDetails.module.css'

class ProjectDetails extends Component {
    render() {
        return(
            <div>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <Card className={styles.card_container}>
                        <CardTitle>Status dos Projetos</CardTitle>
                        <CardBody>
                            <Row>
                                <Col className={styles.col_status_projetos}>
                                    <h6 className={styles.title_tfel1} >Projetos em TFEL 1</h6> 
                                    <h3  className={styles.info_tfel1} >50</h3>
                                </Col>
                                <Col className={styles.col_status_projetos}>
                                    <h6 className={styles.title_tfel2} >Projetos em TFEL 2</h6> 
                                    <h3  className={styles.info_tfel2} >50</h3>
                                </Col>
                                <Col className={styles.col_status_projetos}>
                                    <h6 className={styles.title_tfel3}>Projetos em TFEL 3</h6> 
                                    <h3  className={styles.info_tfel3}>50</h3>
                                </Col>
                                <Col className={styles.col_status_projetos}>
                                    <h6 className={styles.title_execucao}>Execução</h6> 
                                    <h3 className={styles.info_execucao}>50</h3>
                                </Col>
                                <Col>
                                    <h6 className={styles.title_operacao}>Operação</h6> 
                                    <h3 className={styles.info_operacao}>50</h3>
                                </Col>
                            </Row>
                        </CardBody>
                    </Card>
                </Col>
            </div>
        );
    }
}

export default ProjectDetails;