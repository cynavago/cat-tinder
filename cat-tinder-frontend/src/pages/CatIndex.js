import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
// import CatCard from '../components/CatCard.js'
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import '../App.css';

class CatIndex extends Component{
    render(){
        return(
            <React.Fragment>
                <Header />
                    <h2 style={{display:'flex', justifyContent:'center'}}>Meet the Cats!</h2>
                    <br />
                    
                    <CardDeck>
                        { this.props.cats.map((cat, index) => {
                            return (
                                <Card body key={ index }>
                                <CardImg style={{  objectFit:"cover"}}  src={ cat.image } alt="Cat Image" />
                                <CardTitle>
                                    <h4>{ cat.name }</h4>
                                </CardTitle>
                                <CardText>{ cat.enjoys }</CardText>
                                <Button key={ index }><NavLink to={`/catshow/${cat.id}`}>learn more about { cat.name }</NavLink>
                                </Button>                                
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