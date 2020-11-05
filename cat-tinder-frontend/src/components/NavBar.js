import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const links = [
    { href: '/', text: 'Home' },
    { href: '/catindex', text: 'View Cats' },
    { href: '/catnew', text: 'Add a Cat' },
];

const createNavItem = ({ href, text, className }) => (
    <NavItem>
      <NavLink href={href} className={className}>{text}</NavLink>
    </NavItem>
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
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">reactstrap</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        {links.map(createNavItem)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
        )
    }
}
export default NavBar 