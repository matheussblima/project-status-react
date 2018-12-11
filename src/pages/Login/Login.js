import React, { Component } from 'react';
import {
    Container, 
    Col, 
    Row,
    Form,
    FormGroup,
    Label,
    Input,
    Button, 
    Card
  } from 'reactstrap';
import styles from './Login.module.css';
import images from '../../config/image'


class Login extends Component {
    render() {
        return(
            <div className={styles.body}>
                <Container className={styles.container}>
                    <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card body>
                            <Row>
                                <Col>
                                    <h2>Entrar</h2>
                                </Col>
                                <Col className={styles.container_logo}>
                                    <img alt="Logo" className="logo" src={images.logo}/>
                                </Col>
                            </Row>
                            <Form className="form">
                            <Col>
                                <FormGroup>
                                <Label>Email</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="meuemail@email.com"
                                />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                <Label for="password">Password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="********"
                                />
                                </FormGroup>
                                <FormGroup>
                                    <Button color="link">Primeiro acesso? / Esquceu a senha?</Button>
                                </FormGroup>
                            </Col>
                            <Button color="success">Entrar</Button>
                            </Form>
                        </Card>
                    </Col>
                </Container>
            </div>
        );
    }
}

export default Login;