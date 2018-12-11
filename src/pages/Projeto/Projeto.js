import React, { Component } from 'react';
import { Menu } from '../../components';
import { Card, CardHeader, CardBody, Col, Row, InputGroup, InputGroupAddon, FormGroup, Input, Label, Button  } from 'reactstrap';
import { Checkbox } from 'primereact/checkbox';
import { TabView, TabPanel } from 'primereact/tabview';
import styles from './Projeto.module.css'


class Projeto extends Component {

    
    //TFEL1 RENDER

    renderTfel1() {
        return(
            <div>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Termo de abertura da Parada elaborado, emitido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Escorpo definido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                            <Input placeholder="Estimativa de Custo" type="number" step="1" />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <Input placeholder="Prazo da Parada" />
                            <InputGroupAddon addonType="append">Meses</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Fatores que poderam causar mudanças relevante:</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Button>Enviar relatiorio</Button>
                    </Col>
                </Row>
            </div>
        );
    }

    //TFEL2 RENDER

    renderTfel2() {
        return(
            <div>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Termo de abertura da Parada elaborado, emitido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Escorpo definido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                            <Input placeholder="Estimativa de Custo" type="number" step="1" />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <Input placeholder="Prazo da Parada" />
                            <InputGroupAddon addonType="append">Meses</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Fatores que poderam causar mudanças relevante:</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Button>Enviar relatiorio</Button>
                    </Col>
                </Row>
            </div>
        );
    }

     //TFEL3 RENDER

     renderTfel3() {
        return(
            <div>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Termo de abertura da Parada elaborado, emitido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Escorpo definido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                            <Input placeholder="Estimativa de Custo" type="number" step="1" />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <Input placeholder="Prazo da Parada" />
                            <InputGroupAddon addonType="append">Meses</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Fatores que poderam causar mudanças relevante:</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Button>Enviar relatiorio</Button>
                    </Col>
                </Row>
            </div>
        );
    }

    //OPERAÇÂO RENDER

    renderOperacao() {
        return(
            <div>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Termo de abertura da Parada elaborado, emitido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Escorpo definido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                            <Input placeholder="Estimativa de Custo" type="number" step="1" />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <Input placeholder="Prazo da Parada" />
                            <InputGroupAddon addonType="append">Meses</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Fatores que poderam causar mudanças relevante:</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Button>Enviar relatiorio</Button>
                    </Col>
                </Row>
            </div>
        );
    }

    //EXECUÇÃO RENDER

    renderExecucao() {
        return(
            <div>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Termo de abertura da Parada elaborado, emitido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Checkbox></Checkbox>
                        <label htmlFor="cb1" className="p-checkbox-label">Escorpo definido e registrado</label>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <InputGroupAddon addonType="prepend">R$</InputGroupAddon>
                            <Input placeholder="Estimativa de Custo" type="number" step="1" />
                            <InputGroupAddon addonType="append">.00</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <InputGroup>
                            <Input placeholder="Prazo da Parada" />
                            <InputGroupAddon addonType="append">Meses</InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <FormGroup>
                            <Label for="exampleText">Fatores que poderam causar mudanças relevante:</Label>
                            <Input type="textarea" name="text" id="exampleText" />
                        </FormGroup>
                    </Col>
                </Row>
                <Row className={styles.row_formularios}>
                    <Col>
                        <Button>Enviar relatiorio</Button>
                    </Col>
                </Row>
            </div>
        );
    }

    render() {
        return(
            <div>
                {/* NAVBAR */}
                <Menu />

                 {/* FORMULARIOS */}
                 <Col className={styles.formulario_container} sm="12" md={{ size: 10, offset: 1 }}>
                    <h1>Projeto 01</h1>
                    <h5>Codigo: 0001</h5>       
    
                    <Card className={styles.card_formularios}>
                        <CardHeader>
                            Formularios
                            <span className={styles.span_resposavel_nome}>
                                <b>Responsavel:</b> Fulano
                            </span>
                        </CardHeader>
                        <CardBody>
                            <TabView>
                                <TabPanel header="TFEL 1" leftIcon="pi pi-folder-open">
                                    { this.renderTfel1() }
                                </TabPanel>
                                <TabPanel header="TFEL 2" leftIcon="pi pi-folder-open">
                                    { this.renderTfel2() }
                                </TabPanel>
                                <TabPanel header="TFEL 3" leftIcon="pi pi-folder-open">
                                    { this.renderTfel3() }
                                </TabPanel>
                                <TabPanel header="Execução" leftIcon="pi pi-folder-open">
                                    { this.renderExecucao() }
                                </TabPanel>
                                <TabPanel header="Operação" leftIcon="pi pi-folder-open">
                                    { this.renderOperacao() }
                                </TabPanel>
                            </TabView>
                        </CardBody>
                    </Card>
                 </Col>
            </div>
        );
    }
}

export default Projeto;