import React, { Component } from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

class Home extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <div id="backgroundBody" style={{height:'500px'}}>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <h2>Welcome to Cat Tinder!</h2>
                    </div>
                    <br></br>
                    <div style={{display:'flex', justifyContent:'center'}}>
                    <p>Here your frolicking feline friend has a chance to strut their stuff. 
                        <br></br>Make sure to put your best paw forward. </p>
                    </div>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
export default Home