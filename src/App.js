import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import Home from './components/Home/Home'
import Works from './components/Works/Works'
import Aboutme from './components/Aboutme/Aboutme'
import Links from './components/Links/Links'
import Compprog from './components/Compprog/Compprog'
import Skills from './components/Skills/Skills'

import './App.css'
import { IoLogoTwitter, IoLogoGithub } from 'react-icons/io/'
import { Toolbar, Typography, AppBar} from '@material-ui/core';

class Header extends React.Component{

    render(){
      
      return(
        <AppBar position = 'static'>
          <h1>Rapio's Portfolio</h1>
          <Toolbar>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link to = {'/'} color = 'inherit'>Home</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link to = {'/aboutme'} color = 'inherit'>AboutMe</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link to = {'/works'} color = 'inherit'>Works</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link to = {'/skills'} color = 'inherit'>Skills</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link to = {'/competitive-programming'} color = 'inherit'>CompetitiveProgramming</Link>
            </Typography>
            <Typography variant="h6" color="inherit" className = 'navitem'>
              <Link to = {'/links'} color = 'inherit'>Links</Link>
            </Typography>

            
            
          </Toolbar>
        </AppBar>
      )

    }
}

const Footer = () => {
    return (
      <div>
        <Link to = {'https://github.com/daleksprinter'}>
          <IoLogoGithub className = 'linkIcon'/>
        </Link>
        <Link to = {'https://twitter.com/Gxupu50ILbqonRQ'}>
          <IoLogoTwitter className = 'linkIcon'/>
        </Link>
  
      </div>
    )
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
