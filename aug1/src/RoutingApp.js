import React from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';

const Links = () => (
  <nav>
    <NavLink exact activeStyle= {{color: 'red'}} to={'/'} >Home </NavLink>
    <NavLink activeStyle= {{color: 'red'}} to={'/about'} >About </NavLink>
    <NavLink activeStyle= {{color: 'red'}} to={'/contact'} >Contact </NavLink>
  </nav>
)

const RoutingApp = () => {
  return(
    <BrowserRouter>
      <div>
        <Links/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" render={() => <h1>About</h1>}/>
          <Route path="/contact" render={() => <h1>Contact Info</h1>}/>
          <Route render={() => <h1>Not Found</h1>}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

const Home = () => <h1>Home page</h1>


export default RoutingApp
