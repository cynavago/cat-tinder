import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import CatCard from '../components/CatCard.js'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row, Col, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

class CatIndex extends Component{
    render(){
        return(
            <>
            <div>
            <br/>
            <h2 className="h2-title" style={{display:'flex', justifyContent:'center'}}>Meet the Cats!</h2>
                <br/>
                <Container classname="index-cards">
                    <Row xs="1" sm="2" md="3">
                        {this.props.cats.map((cat, index) =>{
                        return(
                        <Col style={{padding:"8px", margin:"auto"}}>
                            <Card body key={ index }>
                                <CardImg style={{  objectFit:"cover"}}  src={ cat.image } alt="Cat Image" />
                                <CardTitle className="index-title">
                                    { cat.name }
                                </CardTitle>
                                <p className="index-text">{ cat.enjoys } </p>
                                <Button color = "info" key={ index }><NavLink style ={{color:"white"}} to={`/catshow/${cat.id}`}>learn more about { cat.name }</NavLink>
                                </Button>
                            </Card>
                        </Col>
                        )
                        })}
                    </Row>
                </Container>

                <Footer />
            </div>
            </>
        )
    }
}
export default CatIndex
