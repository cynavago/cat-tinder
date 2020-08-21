import React, { Component } from 'react';
import CatEdit from './pages/CatEdit.js';
import CatIndex from './pages/CatIndex.js';
import CatNew from './pages/CatNew.js';
import CatShow from './pages/CatShow.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';
// commenting this out since we are connecting to backend database
// import catData from './mockCats.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import './App.css';

class App extends Component {
  // lifecycle method1
  constructor(props){
    super(props)
    this.state = {
      // empty array instead of mock cats
      cats: []
    }
  }
  // lifecycle method 3: after render
  componentDidMount(){
    // fetch takes argument of location (url). cats since we're following restful routes. 
    fetch("http://localhost:3000/cats")
    //.then is a HOF that takes in a response
    .then(response => {
      if(response.status === 200){
        return response.json()
      }
    }).then(catsArray => {
      this.setState({ cats: catsArray })
    }).catch(errors => {
        console.log("index errors:", errors)
    })
  }

  // fetch call to make post
  createNewCat = (newCat) => {
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newCat),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    }).then(response => {
      // if the response is good, it will reload the cats
      if(response.status === 200){
        this.componentDidMount()
      }
      return response
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  editCat = (editcat, id) => {
    console.log("editcat:", editcat)
    console.log("id:", id)
  }
  // lifecycle method 2
  render(){
    // console.log(this.state.cats)
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route 
              path="/catindex" 
              render={ (props) => <CatIndex cats={ this.state.cats } /> } 
            />
            <Route 
            // This retrieves a specific cat to show from our database.
              path="/catshow/:id" 
              // render taking in props to use data from state.
              render={ (props) => {
                let id = props.match.params.id
                // matching the id in the url with the id located in state.
                // strict equality to ensure clean usable data
                let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                return (
                  // Component call that will show the specific cat.
                  <CatShow cat={ cat }
                  />
                )
              }} 
            />
            <Route 
              path="/catnew" 
              render={ (props) => <CatNew createNewCat={ this.createNewCat }/> }
            />
            <Route 
              exact path= {"/catedit/:id"}
              render={ (props ) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                return(
                  <CatEdit
                    editCat={ this.editCat }
                    cat={ cat }
                  />
                )
              }}
            />

            <Route component={ NotFound }/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
