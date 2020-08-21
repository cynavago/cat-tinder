import React, { Component } from 'react';
import { Button, Navbar, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar  expand="md" style={{ display:'flex', justifyContent:'center', margin:'auto', color:'#fc8200', width:'50%'}}>
                    <NavItem style={{margin:'auto'}}>
                        <NavLink to={`/`}>Home</NavLink>
                    </NavItem>
                    <br/>
                    <NavItem style={{margin:'auto'}}>
                        <NavLink to={`/catindex`}>All Cats</NavLink>
                    </NavItem>
                    <br/>
                    <NavItem style={{margin:'auto'}}>
                        <NavLink to={`/catnew`}>Add a Cat</NavLink>
                    </NavItem>
                </Navbar>
            </React.Fragment>
        )
    }
}
export default Footer