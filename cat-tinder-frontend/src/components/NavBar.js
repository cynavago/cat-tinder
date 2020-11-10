import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Media
  } from 'reactstrap';
  import image from "../assets/logo.png"

const links = [
    { href: '/', text: 'Home' },
    { href: '/catindex', text: 'View Cats' },
    { href: '/catnew', text: 'Add a Cat' },
];

const createNavItem = ({ href, text, className }) => (
    <NavLink href={href} className={className}>
        <div className="navbar-links"> {text} </div>
    </NavLink>
);

class NavBar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isOpen: false
        };

        this.toggle = this.toggle.bind(this);
    }

    toggle() {
    this.setState({
        isOpen: !this.state.isOpen
    });
    }
    render(){
        return(
            <React.Fragment>
                <Navbar className="navbar-bg" light expand="md">
                    <NavbarBrand className="navbar-left" href="/">
                        <Media className="logo" src={image} alt="Meow and Furever logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse className="navbar-right" isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto">
                            {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
export default NavBar 