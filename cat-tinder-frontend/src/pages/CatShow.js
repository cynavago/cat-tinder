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
                <Card>
                    <CardImg top width="100%" src={ this.props.cat.image } alt="Card image cap" />
                    <CardTitle>
                        <h4>{ this.props.cat.name }</h4>
                    </CardTitle>
                    <CardText>{ this.props.cat.enjoys }</CardText>
                    <Button>Purr-fect Match</Button>                                
                </Card>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default CatShow