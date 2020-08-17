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
    console.log(this.state.cats)
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/" component={ Home } />
            <Route path="/catindex" component={ CatIndex } />
            <Route path="/catshow/:id" component={ CatShow } />
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
