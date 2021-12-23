import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props) {
        super(props);

        this.toggleNav=this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-5">
                                <img src="/Logo.gif" height="80" alt="Logo" />
                            </div>
                            <div className="col">
                                <h1>Tech Support</h1>
                                <h2 className="d-sm-block d-none">We Care a Lot Foundation</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                <Navbar className="mb-4" dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarBrand className="mr-auto"></NavbarBrand>
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/pictureTutorial">
                                        <i className="fa fa-picture-o fa-lg" /> Picture Tutorials
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/videoTutorial">
                                        <i className="fa fa-video-camera fa-lg" /> Video Tutorials
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/learn">
                                        <i className="fa fa-graduation-cap fa-lg" /> Learn Something New
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