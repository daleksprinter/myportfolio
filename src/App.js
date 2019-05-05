import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works'
import Aboutme from './components/Aboutme'
import Navbar from './components/Navbar'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Link to = '/'>Home</Link>
        <Link to = '/works'>Works</Link>
        <Link to = '/aboutme'>AboutMe</Link>
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/works' component = {Works}></Route>
        <Route path = '/aboutme' component = {Aboutme}></Route>
      </BrowserRouter>

    </div>
  );
}

export default App;
