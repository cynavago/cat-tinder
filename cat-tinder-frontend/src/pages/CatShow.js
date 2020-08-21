import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row
  } from 'reactstrap';
import { NavLink, Route } from 'react-router-dom';
import CatIndex from './CatIndex.js';

class CatShow extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <Card style= {{width:"30%", height:"40%", margin:"auto", marginTop:"32px", marginBottom:"32px", padding:"16px"}}>
                    <CardImg style={{height:"20%", width:"100%"}} src={ this.props.cat.image } alt="Card image cap" />
                    <CardTitle style={{display:'flex', justifyContent:'center'}}>
                    <h4>{ this.props.cat.name }, { this.props.cat.age } years old.</h4>
                    </CardTitle>
                    <CardText style={{display:'flex', justifyContent:'center'}}>{ this.props.cat.story }</CardText>
                    <Button color="success">Purr-fect Match</Button> 
                    <br></br> 
                    <Row style={{display:'flex', justifyContent:'center'}} >
                        <NavLink to={`/catedit/${this.props.cat.id}`}>
                            <Button style={{margin:"5px"}} color="info">
                                Edit Profile
                            </Button>
                        </NavLink>
                        <NavLink style={{margin:"5px"}} to={"/catindex"}>
                            <Button color="danger">
                                Delete Cat
                            </Button>
                        </NavLink>
                    </Row>
                    <br></br>                              
                </Card>
                <Footer/>
            </React.Fragment>
        )
    }
}
// style={{marginRight: spacing + 'em'}}
export default CatShow