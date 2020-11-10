import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {
    Card, Button, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody, Row
  } from 'reactstrap';
import { NavLink, Route, Redirect } from 'react-router-dom';
import CatIndex from './CatIndex.js';

class CatShow extends Component{
    constructor(props){
        super(props)
            this.state = {
            success: false
        }
    }

    // created a handleSubmit method for the delete button. 
    handleSubmit = (e) => {
        // prevents unnecessary refreshes
        e.preventDefault()
        // function call from App.js which deletes the specific cat id
        this.props.deleteCat(this.props.cat.id)
        // updates success to true
        this.setState({ success: true })
    }

    render(){
        return(
            <React.Fragment>
                    <div>
                    <h2 className="h2-title" style={{ display:'flex', justifyContent:'center', padding:'10px', paddingTop:'15px' }}>Meet {this.props.cat.name} </h2>
                    <Row xs="1" sm="1" md="3" lg="3">
                        <Card className="card-shadow" style= {{width:"30%", height:"40%", margin:"auto", marginTop:"32px", marginBottom:"32px", padding:"16px"}}>
                            <CardImg style={{height:"20%", width:"100%"}} src={ this.props.cat.image } alt="Card image cap" />
                            <CardTitle style={{ display:'flex', justifyContent:'center'}} className="show-title">{ this.props.cat.name }</CardTitle>
                            <CardText className="index-text" style={{display:'flex', justifyContent:'center'}}>{ this.props.cat.story }</CardText>
                            <CardText style={{display:'flex', justifyContent:'center'}}>{ this.props.cat.enjoys }</CardText>

                            <Button style={{ borderColor:'#ffffff'}} className="btn-secondary">Purr-fect Match</Button> 
                            <br></br> 
                            <Row style={{display:'flex', justifyContent:'center'}} >
                                <NavLink to={`/catedit/${this.props.cat.id}`}>
                                    <Button style={{margin:"5px"}} color="info">
                                        Edit Profile
                                    </Button>
                                </NavLink>
                                <NavLink style={{margin:"5px"}} to={"/catindex"}>
                                    <Button 
                                        color="danger"
                                        //added an onClick on button
                                        onClick={ this.handleSubmit }
                                    >
                                        Delete Cat
                                    </Button>
                                </NavLink>
                            </Row>
                            <br></br>                              
                        </Card>
                    </Row>
                <Footer/>
                </div>
                { this.state.success && <Redirect to={"/catindex"}/> }
            </React.Fragment>
        )
    }
}
// style={{marginRight: spacing + 'em'}}
export default CatShow