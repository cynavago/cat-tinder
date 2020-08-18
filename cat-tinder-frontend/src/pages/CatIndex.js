import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import CatCard from '../components/CatCard.js'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
  } from 'reactstrap';

class CatIndex extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                    <h2>Meet the Cats!</h2>
                    <br />
                    
                    <CardDeck>
                        { this.props.cats.map((cat, index) => {
                            return (
                                <Card body key={ index }>
                                <CardImg top width="100%" src={ cat.image } alt="Card image cap" />
                                <CardTitle>
                                    <h4>{ cat.name }</h4>
                                </CardTitle>
                                <CardText>{ cat.enjoys }</CardText>
                                <Button>Button</Button>
                                </Card>
                            )
                        })}
                    </CardDeck>

                <Footer />
            </React.Fragment>
        )
    }
}
export default CatIndex