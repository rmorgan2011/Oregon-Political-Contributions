import React from 'react';
import {BrowserRouter, Route, NavLink, Switch} from 'react-router-dom';
import jsonData from './generated.json';
import ContactCard from './ContactCard'

function ContactRouting(props){
    if(jsonData.length > 0){
      var newLinks = jsonData.map(element => <NavLink exact style={{margin: '5px'}} activeStyle= {{color: 'red'}} to={'/' + element.guid} key={'link' + element.guid} >{element.name}</NavLink>);
    }
    if(jsonData.length > 0){
      var newRoutes = jsonData.map(element => <Route exact path={"/" + element.guid} key={'route' + element.guid} render={() => <ContactCard name={element.name} picture={'http://fillmurray.com/' + (100 + (jsonData.indexOf(element) * 7 )) + '/' + (100 + (jsonData.indexOf(element) * 7))} email={element.email} phone={element.phone} address={element.address}/>} />);
    }
    return(

      <BrowserRouter>
        <div>
          <h1>Contact List</h1>
          <nav>
            <NavLink exact activeStyle= {{color: 'red'}} to={'/'} >Home </NavLink>
            {newLinks}
          </nav>
          <Switch>
            <Route exact path="/" component={Home}/>
            {newRoutes}
            <Route render={() => <h1>Not Found</h1>}/>
          </Switch>
        </div>
      </BrowserRouter>
  )

  }

const Home = () => <h1>Home page</h1>

export default ContactRouting;
