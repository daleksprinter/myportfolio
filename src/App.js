import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works/Works'
import Aboutme from './components/Aboutme'
import Links from './components/Links'


function App() {
  return (
    <div className = 'app'>
      <BrowserRouter>
        <p>Rapio's Portfolio</p>
        <Link to = '/'>Home</Link>
        <Link to = '/works'>Works</Link>
        <Link to = '/aboutme'>AboutMe</Link>
        <Link to = '/links'>Links</Link>
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/works' component = {Works}></Route>
        <Route path = '/aboutme' component = {Aboutme}></Route>
        <Route path = '/Links' component = {Links}></Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
