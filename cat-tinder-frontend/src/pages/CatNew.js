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
  import { Redirect } from 'react-router-dom';

class CatNew extends Component{
    constructor(props){
        super(props)
        this.state = {
            form: {
                name: "",
                age: "",
                enjoys: "",
                story: "",
                image: ""
            },
            success: false
        }
    }

    handleChange = (e) => {
        // destructuring form out of state
        let { form } = this.state
        form[e.target.name] = e.target.value
        // setting state to the updated form
        this.setState({ form: form })
      }

    handleSubmit = (e) => {
    // keeps react from refreshing the page unnecessarily
        e.preventDefault()
        this.props.createNewCat(this.state.form)
        this.setState({ success: true })
    }

    render(){
        return(
            <React.Fragment>
               <h2 className="h2-title" style={{display:'flex', justifyContent:'center'}}>Create a new profile</h2>
                <Form className="form">
                    <FormGroup>
                        <Label>Name</Label>
                        <Input
                        type="text"
                        name="name"
                        onChange={ this.handleChange }
                        value={ this.state.form.name }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Location</Label>
                        <Input
                        type="text"
                        name="story"
                        onChange={ this.handleChange }
                        value={ this.state.form.story }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Age</Label>
                        <Input
                        type="number"
                        name="age"
                        onChange={ this.handleChange }
                        value={ this.state.form.age }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Enjoys</Label>
                        <Input
                        type="text"
                        name="enjoys"
                        onChange={ this.handleChange }
                        value={ this.state.form.enjoys }
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label>Image</Label>
                        <Input
                        type="text"
                        name="image"
                        onChange={ this.handleChange }
                        value={ this.state.form.image }
                        />
                    </FormGroup>
                    <Button
                        name="submit"
                        color="secondary"
                        onClick={ this.handleSubmit }
                        style={{ borderColor:'#EEF2F7'}} 
                    >
                        Create a Cat
                    </Button>
                </Form>
                <Footer/>
                { this.state.success && <Redirect to="/catindex" />}
            </React.Fragment>
        )
    }
}
export default CatNew

