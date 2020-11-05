import React, { Component } from 'react';
import { 
    Jumbotron, 
    Container,
    Media,
    Button,
    NavLink
} from 'reactstrap';
import image from "../assets/hero-2.png"

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <Jumbotron style={{ backgroundColor:'#fff'}} fluid>
                    <Container fluid>
                        <Media className="hero-image" src={image} alt="Cat in front of blue gradient" />
                    <div className="hero-copy">
                        <h1 className="hero-title">Meow & Furever</h1>
                        <p> Find your purr-fect match</p>
                        <br></br>
                        <Button className="btn-primary">                            
                            <NavLink className="btn-primary" href="/catindex">Find my match</NavLink>
                        </Button>
                    </div>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header