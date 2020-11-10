import React, { Component } from 'react';
import Footer from '../components/Footer.js';
import {
    Card, 
    Button, 
    CardImg, 
    CardTitle, 
    CardText, 
    Row
} from 'reactstrap';
import { NavLink, Redirect } from 'react-router-dom';

class CatShow extends Component{
    constructor(props){
        super(props)
            this.state = {
            success: false,
            image: false
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

    handleClick = (e) => {
        e.preventDefault()
        this.props.faveCatsValue(this.props.cat.id)
        this.setState({ success: true })
    }



    render(){
        console.log("image true or false:", this.state.image);
        console.log("state:", this.props.faveCats);
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
                            {/* <Button 
                                style={{ borderColor:'#ffffff'}} 
                                className="btn-secondary"
                                onClick = { this.handleClick }
                            >
                                Purr-fect Match
                            </Button>  */}
                            <br></br> 
                            <Row style={{display:'flex', flexWrap:'wrap', justifyContent:'center'}} >
                                <NavLink style={{paddingRight:"2%"}} to={`/catedit/${this.props.cat.id}`}>
                                    <Button 
                                        style={{ borderColor:'#ffffff'}} 
                                        className="btn-secondary"
                                    >
                                        Edit Profile
                                    </Button>
                                </NavLink>
                                <NavLink style={{paddingLeft:"2%"}} to={"/catindex"}>
                                    <Button 
                                        style={{ borderColor:'#ffffff'}} 
                                        className="btn-secondary"
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