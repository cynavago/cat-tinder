import React, { Component } from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'
import image from "../assets/iphone.png"


class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <br/>
                <div style={{display:'flex', justifyContent:'center'}}>
                <h2 className="h2-title">Welcome to Meow & Furever, a cat matching app.</h2>
                </div>
                <br></br>
                <div>
                <p className="home-text">Here your frolicking feline friend has a chance to strut their stuff. Make sure to put your best paw forward. </p>
                </div>
                <img src={image}/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Home