import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works/Works'
import Aboutme from './components/Aboutme'
import Links from './components/Links'
import Compprog from './components/Compprog'
import Skills from './components/Skills'

function App() {
  return (
    <div className = 'app'>
      <BrowserRouter>
        <p>Rapio's Portfolio</p>
        <Link to = '/'>Home</Link>
        <Link to = '/works'>Works</Link>
        <Link to = '/competitive-programming'>Competitive Programming</Link>
        <Link to = '/aboutme'>AboutMe</Link>
        <Link to = '/links'>Links</Link>
        <Link to = '/skills'>Skills</Link>
        
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
