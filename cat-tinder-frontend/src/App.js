import React, { Component } from 'react';
import './App.css';
import CatEdit from './pages/CatEdit.js';
import CatIndex from './pages/CatIndex.js';
import CatNew from './pages/CatNew.js';
import CatShow from './pages/CatShow.js';
import Home from './pages/Home.js';
import NotFound from './pages/NotFound.js';
import catData from './mockCats.js';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      cats: catData
    }
  }
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
            <Route path="/catnew" component={ CatNew } />
            <Route path="/catedit/:id" component={ CatEdit } />
            <Route component={ NotFound }/>
          </Switch>
        </Router>
      </React.Fragment>
    )
  }
}

export default App;
