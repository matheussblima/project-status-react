import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import './styles.css';

class Menu extends Component {
constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { className } = this.props;

        return (
            <div>
            <Navbar {...this.props} className={[className, "nav-container"]} light expand="md">
                <NavbarBrand href="/">Projetos Status</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/configurações/">Configurações</NavLink>
                    </NavItem>
                    <UncontrolledDropdown nav inNavbar>
                    <DropdownToggle nav caret>
                        Usuario
                    </DropdownToggle>
                    <DropdownMenu right>
                        <DropdownItem>
                        Mudar Senha
                        </DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>
                        Sair
                        </DropdownItem>
                    </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                </Collapse>
            </Navbar>
            </div>
        );
    }
}

Menu.propTypes = {
    className: PropTypes.any,
}

export default Menu;