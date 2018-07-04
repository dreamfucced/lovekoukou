import React, { Component } from 'react';
//import logo from './logo.svg';
//import {Router} from 'react-router'
import {Nav, NavItem,Button,Navbar,Collapse,DropdownItem,Dropdown,DropdownMenu,DropdownToggle} from 'reactstrap';
import {BrowserRouter,Switch,Route,Redirect,NavLink,Link} from 'react-router-dom';     
 export default class Nav1 extends React.Component{
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
    render(){
        const page1name = ' Page1'
        const page2name = ' Page2'
        const page3name = ' Page3'
        const page4name = ' Page4'
        const page5name = ' Page5'
        return(
            <div>
                <Navbar color="dark" expand="md">
            <Nav pills>
                <Dropdown isOpen={this.state.dropdownOpen} onClick={()=>this.toggle()} className='App-dropdown'>
                    <DropdownToggle caret>
                    Dropdown
                    </DropdownToggle>
                    <DropdownMenu right>
                    <DropdownItem>
                        <NavLink to='/Page1'>{page1name}</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink to='/Page2'>{page2name}</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink to='/Page3'>{page3name}</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink to='/Page4'>{page4name}</NavLink>
                    </DropdownItem>
                    <DropdownItem>
                    <NavLink to='/Page5'>{page5name}</NavLink>
                    </DropdownItem>
                    </DropdownMenu>
                </Dropdown>        
            </Nav>
            </Navbar>
            </div>
        )
    }
}     
