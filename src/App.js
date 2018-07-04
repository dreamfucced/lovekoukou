import React, { Component } from 'react';
//import logo from './logo.svg';
//import {Router} from 'react-router'
import {BrowserRouter,Switch,Route,Redirect,NavLink,Link} from 'react-router-dom';
import './App.css';
import A from './Page/homepage'
import B from './Page/page1'
import C from './Page/page2'
import D from './Page/page3'
import E from './Page/page4'
import F from './Page/page4'
import 'font-awesome/css/font-awesome.min.css';


import {Nav, NavItem,Button,Navbar,Collapse,DropdownItem,Dropdown,DropdownMenu,DropdownToggle} from 'reactstrap';
class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }
  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }
  
  render() {

    //var logo1 = (<img style={{height:'20px',width:'20px'}}  src={Icon1}/>)
    return (     
       <BrowserRouter>
        <div className="App">    
          <Switch>
            <Route exact path='/' component={A} />
            <Route exact path='/Page1' component={B} />
            <Route exact path='/Page2' component={C} />
            <Route exact path='/Page3' component={D} />
            <Route exact path='/Page4' component={E} />
            <Route exact path='/Page5' component={F} />
          </Switch>
          </div>
       </BrowserRouter>   
    );
  }
}

export default App;
