import React, { Component } from 'react';
import NavBar from './components/NavBar'
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
        console.log("CDM response status", response.status);
        return response.json()
      }
    }).then(catsArray => {
      this.setState({ cats: catsArray })
    }).catch(errors => {
        console.log("index errors:", errors)
    })
  }

  // fetch call to make post
  createNewCat = (newcat) => {
    return fetch("http://localhost:3000/cats", {
      body: JSON.stringify(newcat),
      headers: { "Content-Type": "application/json" },
      method: "POST"
    }).then(response => {
      // if the response is good, it will reload the cats
      if(response.status === 200){
        this.componentDidMount()
      }
      console.log("CreateNewCat response status:", response.status);
      return response
    })
    .catch(errors => {
      console.log("create errors:", errors)
    })
  }

  editCat = (editCat, id) => {
    console.log("editCat:", editCat, "id:", id);
    return fetch(`http://localhost:3000/cats/${id}`, {
      body: JSON.stringify(editCat),
      headers: { "Content-Type": "application/json" },
      method: "PATCH"
    })
    .then(response => {
      if(response.status === 204){
        this.componentDidMount()
      }else {
        alert("update unsuccesful") 
      }
      console.log("editCat response status:", response.status);
      return response
    })
    .catch(errors => {
      console.log("edit errors", errors);
    })
  }

  //delete cat method, retrieves id of cat and passes the delete method on it
  deleteCat = (id) => {
    return fetch(`http://localhost:3000/cats/${id}`, {
      headers: {
        "Content-Type": "application/json"
      },
      method: "DELETE"
    })
    .then(response => {
      if(response.status === 204){
        this.componentDidMount()
      }
      console.log("DeleteCat response status:", response.status);
      return response
    })
    .catch(errors => {
      console.log("delete errors:", errors)
    })
  }

  // lifecycle method 2
  render(){
    const {
      logged_in,
      sign_in_route,
      sign_out_route,
      current_user
    } = this.props
  
    console.log("current_user:", current_user);
    return (
      <React.Fragment>
        <Router>
          <NavBar />
          <Switch>
            <Route 
              exact path="/" 
              component={ Home } 
            />
            <Route 
              path="/catindex" 
              render={ (props) => 
              <CatIndex 
                cats={ this.state.cats } 
              /> } 
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
                  // Component call that will show the specific cat. Added the deleteCat method from above in the route. The show page now has access to deleteCat method. Passes deleteCat to CatShow.
                  <CatShow 
                    cat={ cat } 
                    deleteCat={ this.deleteCat }
                  />
                )
              }} 
            />
            <Route 
              path="/catnew"
              render={ (props) => 
                <CatNew 
                  createNewCat={ this.createNewCat }
                  /> 
                }
                />
            <Route
              exact path= {"/catedit/:id"}
              render={ (props ) => {
                let id = props.match.params.id
                let cat = this.state.cats.find(cat => cat.id === parseInt(id))
                return(
                  <CatEdit
                    cat={ cat }
                    editCat={ this.editCat }
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
