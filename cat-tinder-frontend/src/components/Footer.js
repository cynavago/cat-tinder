import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <NavLink style={{display:'flex', justifyContent:'center'}} to={`/catindex`}>See All Cats</NavLink>
            </React.Fragment>
        )
    }
}
export default Footer