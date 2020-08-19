import React, { Component } from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import {
    Form,
    FormGroup,
    Input,
    Label,
    Button
  } from 'reactstrap';

 
class CatEdit extends Component{
    constructor(props){
        super(props)
            this.state = {
                form:{
                    name: "",
                    age: "",
                    enjoys: ""
            }
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    render(){
        return(
            <React.Fragment>
                <Header/>
                <Form>
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                        type="text"
                        name="name"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Age</Label>
                        <Input
                        type="number"
                        name="age"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Enjoys</Label>
                        <Input
                        type="text"
                        name="enjoys"
                        />
                    </FormGroup>
                </Form>
                <Footer/>
            </React.Fragment>
        )
    }
}
export default CatEdit