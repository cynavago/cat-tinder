import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import CatCard from '../components/CatCard.js'

class CatIndex extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                    <CatCard/>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default CatIndex