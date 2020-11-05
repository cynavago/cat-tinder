import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import CatCard from '../components/CatCard.js'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

class CatIndex extends Component{
    render(){
        return(
            <>
            <div id="backgroundBody">
                <h2 style={{ display:'flex', justifyContent:'center', padding:'16px', paddingTop:'32px' }}>Meet the Cats!</h2>
                <br />
                <Row xs="1" sm="2" md="3" style={{padding:"16px"}}>
                    {this.props.cats.map((cat, index) =>{
                    return(
                    <Col style={{padding:"8px", margin:"auto"}}>
                        <Card body key={ index }>
                            <CardImg style={{  objectFit:"cover"}}  src={ cat.image } alt="Cat Image" />
                            <CardTitle style={{display:'flex', justifyContent:'center'}}>
                                <h4>{ cat.name }</h4>
                            </CardTitle>
                            <CardText style={{display:'flex', justifyContent:'center'}} >{ cat.enjoys }</CardText>
                            <Button color = "info" key={ index }><NavLink style ={{color:"white"}} to={`/catshow/${cat.id}`}>learn more about { cat.name }</NavLink>
                            </Button>
                        </Card>
                    </Col>
                    )
                    })}
                </Row>

                <Footer />
            </div>
            </>
        )
    }
}
export default CatIndex
