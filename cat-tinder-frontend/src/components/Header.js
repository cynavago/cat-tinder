import React, { Component } from 'react';
import { 
    Jumbotron, 
    Container,
    Media,
    Button,
    NavLink,
    Card,
    Row,
    Col
} from 'reactstrap';
import image from "../assets/hero-2.png";
import iphone from "../assets/iphone.png"


class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid>
                    <Container fluid>
                        <Row xs="1" sm="1" md="2" >
                            <div className="hero-copy">
                                <h1 className="hero-title">Meow & Furever</h1>
                                <p> Find your purr-fect match</p>
                                <Button className="btn-secondary" style={{ borderColor:'#ffffff'}}>                            
                                    <NavLink className="btn-text" href="/catindex">Find my match</NavLink>
                                </Button>
                            </div>
                            <img src={image} className="hero-image" style={{display:'flex'}} alt="Cat in front of pink gradient"/>
                        </Row>
                    </Container>
                </Jumbotron>
                <br></br>
                <Container>
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <h2 className="h2-title">Welcome to Meow & Furever, a cat matching app.</h2>
                    </div>
                        <br></br>
                    <div>
                        <p className="home-text">Here your frolicking feline friend has a chance to strut their stuff. Make sure to put your best paw forward. </p>
                    </div>
                    <img src={iphone}/>
                </Container>
            </React.Fragment>
        )
    }
}
export default Header