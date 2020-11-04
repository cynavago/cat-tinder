import React, { Component } from 'react';
import { Jumbotron, Container} from 'reactstrap'

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <Jumbotron className="header-hero" fluid>
                    <Container fluid>
                    <div style={{marginLeft:"50px"}}>
                        <h1 className="display-3">Cat Tinder </h1>
                        <p className="lead" style={{marginTop:"30px", marginBottom:"0px", fontWeight:"600"}}> It's Tinder. For Cats.</p>
                    </div>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header