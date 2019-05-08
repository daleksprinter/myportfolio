import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works/Works'
import Aboutme from './components/Aboutme/Aboutme'
import Links from './components/Links'
import Compprog from './components/Compprog'
import Skills from './components/Skills'
import { NavItem, Nav, Navbar } from 'react-bootstrap'

import AppBar from '@material-ui/core/AppBar';

import './App.css'
import { Toolbar, IconButton, Button, Link, Typography} from '@material-ui/core';

class Header extends React.Component{

    render(){
      
      return(
        <AppBar position = 'static'>
          <Toolbar>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link href = {'/'} color = 'inherit'>Home</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link href = {'/aboutme'} color = 'inherit'>AboutMe</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link href = {'/works'} color = 'inherit'>Works</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link href = {'/skills'} color = 'inherit'>Skills</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link href = {'/competitive-programming'} color = 'inherit'>CompetitiveProgramming</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link href = {'/links'} color = 'inherit'>Links</Link>
            </Typography>

            
            
          </Toolbar>
        </AppBar>
      )

    }
}


function App() {
  return (
    <div className = 'app'>
      <BrowserRouter>
        
        <Header />
        
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/works' component = {Works}></Route>
        <Route path = '/competitive-programming' component = {Compprog}></Route>
        <Route path = '/aboutme' component = {Aboutme}></Route>
        <Route path = '/links' component = {Links}></Route>
        <Route path = '/skills' component = {Skills}></Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
