import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <h3>Footer</h3>
                <Button><NavLink to={`/catindex`}>Home</NavLink></Button>
            </React.Fragment>
        )
    }
}
export default Footer