import React, { Component } from 'react';
import Footer from '../components/Footer.js';
// import {
//     Card, Button, CardImg, CardTitle, Col, Row
//   } from 'reactstrap';
// import { NavLink, Redirect } from 'react-router-dom';

class CatFavorite extends Component{
    render(){
        console.log("fave array", this.props.faveCatsValue())
        return(
            <React.Fragment>
                {this.props.faveCatsValue().length === 0 && 
                <> 
                    <h2 className="h2-title" style={{ display:'flex', justifyContent:'center', padding:'10px', paddingTop:'15px' }}>Favorite Cats </h2>
                </>}
                    
                <div>
                    <h2 className="h2-title" style={{ display:'flex', justifyContent:'center', padding:'10px', paddingTop:'15px' }}>Favorite Cats </h2>
    
                    <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
// style={{marginRight: spacing + 'em'}}
export default CatFavorite 