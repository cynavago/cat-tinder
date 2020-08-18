import React, { Component } from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div style={{display:'flex', justifyContent:'center'}}>
                <h2>Welcome to Cat Tinder!</h2>
                </div>
                <br></br>
                <div style={{display:'flex', justifyContent:'center'}}>
                <p>Here your frolicking feline friend has a chance to strut their stuff.Make sure to put your best paw forward. </p>
                </div>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default Home