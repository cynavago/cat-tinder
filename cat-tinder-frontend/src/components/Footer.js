import React, { Component } from 'react';
import { Button } from 'reactstrap';
import { NavLink } from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <NavLink style={{display:'flex', justifyContent:'center', paddingTop:'40px', paddingBottom:'20px'}} to={`/catindex`}>All Cats</NavLink>
                <NavLink style={{display:'flex', justifyContent:'center', paddingBottom:'20px'}} to={`/`}>Home</NavLink>
            </React.Fragment>
        )
    }
}
export default Footer