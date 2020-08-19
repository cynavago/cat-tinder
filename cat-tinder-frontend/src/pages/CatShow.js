import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import CatIndex from './CatIndex.js';

class CatShow extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Card style= {{width:"30%", height:"40%", margin:"auto"}}>
                    <CardImg style={{height:"20%", width:"100%"}} src={ this.props.cat.image } alt="Card image cap" />
                    <CardTitle style={{display:'flex', justifyContent:'center'}}>
                        <h4>{ this.props.cat.name }</h4>
                    </CardTitle>
                    <CardText style={{display:'flex', justifyContent:'center'}}>{ this.props.cat.story }</CardText>
                    <Button color="info">Purr-fect Match</Button> 
                    <br></br> 
                    <NavLink style={{display:'flex', justifyContent:'center'}} to={`/catedit/${this.props.cat.id}`}>
                        <Button  color="success">
                            Edit Profile
                        </Button>
                    </NavLink>
                    <br></br>                              
                </Card>
                <Footer/>
            </React.Fragment>
        )
    }
}
// style={{marginRight: spacing + 'em'}}
export default CatShow