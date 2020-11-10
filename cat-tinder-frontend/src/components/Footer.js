import React, { Component } from 'react';
import {
    Container,
    Row,
    Col
  } from "reactstrap";
// import { NavLink } from 'react-router-dom';
class Footer extends Component{
    render(){
        return(
            <React.Fragment>
                <Container className="footer-bg" fluid>
                    <Row>
                        <Col>
                            <h5 className="footer-title">Meow & Forever</h5>
                            <p className="footer-copy">
                                A cat finder app. Find your purr-fect love.
                            </p>
                        </Col>
                        <Col>
                            <h5 className="footer-title">Contact Us</h5>
                            <p className="footer-copy">
                                123 Kitty Street,<br></br>
                                New York City, NY 37850
                            </p>
                        </Col>
                    </Row>
                    <Row className="footer-links">
                        <p className="footer-links-text">
                            <a style={{ padding:'2%'}} href="/">Home</a>
                            <a style={{ padding:'2%'}} href="/catindex">View all cats</a>
                            <a style={{ padding:'2%'}} href="/catnew">Add a cat</a>
                        </p>
                    </Row>
                 </Container>
            </React.Fragment>
        )
    }
}
export default Footer