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

class CatEdit extends Component{
    constructor(props){
        super(props)
            this.state = {
                form:{
                    name: this.props.cat.name,
                    age: this.props.cat.age,
                    enjoys: this.props.cat.enjoys,
                    story: this.props.cat.story,
                    image: this.props.cat.image
            },
            success: false
        }
    }

    handleChange = (e) => {
        let { form } = this.state
        form[e.target.name] = e.target.value
        this.setState({form: form})
    }

    handleSubmit = (e) => {
        // prevents unnecessary refreshes
        e.preventDefault()
        // function call from App.js
        this.props.editCat(this.state.form, this.props.cat.id)
        // updates success to true
        this.setState({ success: true })
    }

    render(){
        return(
            <React.Fragment>
                <Form>
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
                        <Label>Story</Label>
                        <Input
                        type="text"
                        name="story"
                        onChange={ this.handleChange }
                        value={ this.state.form.story }
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
                        >
                            Edit profile
                    </Button>
                </Form>
                <Footer/>
                { this.state.success && <Redirect to={ `/catshow/${this.props.cat.id}` }/> }
            </React.Fragment>
        )
    }
}
export default CatEdit
