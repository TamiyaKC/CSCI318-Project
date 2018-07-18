import React, {Component} from 'react';
import './main.css';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Create from "./Create";
import Update from "./Update";
import Delete from "./Delete";

class Main extends Component{
    render(){
      return(
        <HashRouter>
        <div>
        <ul className="navbar">
          <li><NavLink exact to="/">Create</NavLink></li>
          <li><NavLink to="/update">Update</NavLink></li>
          <li><NavLink to="/delete">Delete</NavLink></li>
        </ul>
        <div className="content">
        <Route exact path="/" component={Create}/>
          <Route path="/update" component={Update}/>
          <Route path="/delete" component={Delete}/>
        </div>
        </div>
        </HashRouter>
      )
    }

}

export default Main;
