import React, { Component } from 'react';
import {Panel} from 'primereact/panel';
import {DataView, DataViewLayoutOptions} from "primereact/dataview";
import {Button} from "primereact/button";
import {Dropdown} from "primereact/dropdown";
import { Row, Col } from 'reactstrap';
import styles from './List.module.css';


class List extends Component {
    constructor() {
        super();

        this.state = {
            project: [],
            layout: 'list',
            selectedProject: null,
            visible: false,
            sortKey: null,
            sortOrder: null
        }
        this.itemTemplate = this.itemTemplate.bind(this);
        this.onSortChange = this.onSortChange.bind(this);
    }

    componentDidMount() {
       this.setState({ 
           project: [  
                {
                    codigo: "PJ0001",
                    nome: "Projeto 1",
                    status: "FEL1",
                    responsavel: "Fulano",
                },
                {
                    codigo: "PJ0002",
                    nome: "Projeto 2",
                    status: "FEL2",
                    responsavel: "Fulano",
                },
                {
                    codigo: "PJ0003",
                    nome: "Projeto 3",
                    status: "FEL3",
                    responsavel: "Fulano",
                },
                {
                    codigo: "PJ0004",
                    nome: "Projeto 4",
                    status: "Operação",
                    responsavel: "Fulano",
                },
            ]
        });
    }

    onSortChange(event) {
        const value = event.value;

        if (value.indexOf('!') === 0) {
            this.setState({
                sortOrder: -1, 
                sortField: value.substring(1, value.length), 
                sortKey: value
            });
        }
        else {
            this.setState({
                sortOrder: 1, 
                sortField: value, 
                sortKey: value
            });
        }
    }

    //List Item

    renderListItem(project) {
        return (
            <div className={styles.listItem_container}>
                <Row>
                    <Col md="4">
                        <Row>
                            <Col md="6">                         
                                <h6 className={styles.title_listItem}><b>Nome:</b></h6>
                                <span>{project.nome}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">                         
                                <h6 className={styles.title_listItem}>Codigo:</h6>
                                <span>{project.codigo}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Row>
                            <Col md="6">                         
                                <h6 className={styles.title_listItem}><b>Responsavel:</b></h6>
                                <span>{project.responsavel}</span>
                            </Col>
                        </Row>
                        <Row>
                            <Col md="6">                         
                                <h6 className={styles.title_listItem}><b>Status:</b></h6>
                                <span>{project.status}</span>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4">
                        <Button className={styles.button_editar_listItem} label="Editar" icon="pi pi-pencil" onClick={(e) => this.setState({ selectedProject: project, visible: true })}></Button>
                    </Col>
                </Row>
            </div>
        );
    }

    renderGridItem(project) {
        return (
            <div style={{ padding: '.5em' }} className="p-col-12 p-md-3">
                <Panel header={project.vin} style={{ textAlign: 'center' }}>
                    <div className="car-detail">{project.nome} - {project.color}</div>
                    <hr className="ui-widget-content" style={{ borderTop: 0 }} />
                    <Button icon="pi pi-search" onClick={(e) => this.setState({ selectedCar: project, visible: true })}></Button>
                </Panel>
            </div>
        );
    }

    itemTemplate(project, layout) {
        if (!project) {
            return;
        }

        if (layout === 'list')
            return this.renderListItem(project);
        else if (layout === 'grid')
            return this.renderGridItem(project);
    }

    //Cabeçalho List
    renderHeader() {
        const sortOptions = [
            {label: 'Codigo Projeto', value: 'codigo'},
            {label: 'Nome do Projeto', value: 'nome'},
            {label: 'Responsavel', value: 'responsavel'}
        ];

        return (
            <div>
                <Row>
                    <Col md="6" style={{textAlign: 'left'}}>
                        <Dropdown options={sortOptions} value={this.state.sortKey} placeholder="Ordenar" onChange={this.onSortChange} />
                    </Col>
                    <Col md="6" style={{textAlign: 'right'}}>
                        <DataViewLayoutOptions layout={this.state.layout} onChange={(e) => this.setState({layout: e.value})} />
                    </Col>
                </Row>
            </div>
        );
    }

    render() {
        const header = this.renderHeader();

        return (
            <div className={styles.body}>
                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <h1>Projetos</h1>
                </Col>

                <Col sm="12" md={{ size: 10, offset: 1 }}>
                    <DataView value={this.state.project} layout={this.state.layout} header={header} 
                            itemTemplate={this.itemTemplate} paginatorPosition={'both'} paginator={true} rows={4} 
                            sortOrder={this.state.sortOrder} sortField={this.state.sortField} />
                </Col>
            </div>
        );
    }
}

export default List;