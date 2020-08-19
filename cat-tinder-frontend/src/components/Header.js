import React, { Component } from 'react';
import { Jumbotron, Container} from 'reactstrap'

class Header extends Component {
    render(){
        return(
            <React.Fragment>
                <Jumbotron fluid style={{backgroundImage: "url(https://i.imgur.com/2KRePSO.jpg)", backgroundSize:'cover'}}>
                    <Container fluid>
                    <h1 className="display-3">Cat Tinder </h1>
          <p className="lead" style={{marginTop:"30px", marginBottom:"0px"}}> It's Tinder. For Cats.</p>
                    </Container>
                </Jumbotron>
            </React.Fragment>
        )
    }
}
export default Header