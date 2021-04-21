import React, { Component } from 'react';
import { Nav, NavbarToggler, Collapse,  Navbar,
    NavbarBrand, Jumbotron, NavItem, } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props){
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state={
            isNavOpen: false
        }
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        })
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>FEIFEI</h1>
                                <h2 id="h1Color">CANTONESE</h2>
                                <p class="h4">NOODLE</p> 
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <hr/>
                <Navbar light sticky="top" expand="md" >
                <div className="container">
                    <NavbarToggler onClick={this.toggleNav} className="ml-auto"/>
                    <Collapse isOpen={this.state.isNavOpen} navbar >
                        <Nav navbar >
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    About
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Menu
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Online Order
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Career
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to="/home">
                                    Discover
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </div>
                </Navbar>
            </React.Fragment>
        );
    }
}

export default Header;