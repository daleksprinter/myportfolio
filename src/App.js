import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'

import Home from './components/Home/Home'
import Works from './components/Works/Works'
import Aboutme from './components/Aboutme/Aboutme'
import Compprog from './components/Compprog/Compprog'
import Skills from './components/Skills/Skills'

import hoge from './images/profiles/face.JPG'

import './App.css'
import { Toolbar, Typography, AppBar} from '@material-ui/core';

const NavItem = ({to, name}) => {
  return(
    <div className = 'navitem'>
      <Typography variant="h6" color="inherit">
        <Link to = {to} color = 'inherit'>{name}</Link>
      </Typography>
    </div>
  )
}

class Header extends React.Component{

    render(){
      
      return(
        <AppBar position = 'static'>
            <Typography variant="h5" color="inherit">
              Rapio's Portfolio
            </Typography>
          <div className = 'navbarmenu'>
            <Toolbar>
              <NavItem to = '/' name = 'Home' />
              <NavItem to = '/aboutme' name = 'AboutMe' />
              <NavItem to = '/works' name = 'Works' />
              <NavItem to = '/skills' name = 'Skills' />
              <NavItem to = '/competitive-programming' name = 'CompetitiveProgramming' />
            </Toolbar>
          </div>
        </AppBar>
      )

    }
}

const Fundamental = () => {
  return(
      <Paper className = 'me'>
          <div className = 'av'>
              <img src = {hoge} className = 'avater'></img>
          </div>
          <p>基本情報</p>
          <ul>
              <li>Name : 関根 遼</li>
              <li>Gender : 男</li>
              <li>Age : 22</li>
              <li>From : 北海道</li>
              <li>Condition : とても健康（やや運動不足）</li>
              <li>Major : 情報科学</li>
              <li>Belongs : 公立はこだて未来大学大学院　</li>
              <li>Department : 情報アーキテクチャ領域</li>
              <li>Grade : 修士1年 </li>
          </ul>
      </Paper>
  )
}

function App() {
  return (
    <div className = 'app'>
      <BrowserRouter>
        
        <Header />
        <Fundamental />
        <Route exact path = '/' component = {Home}></Route>
        <Route path = '/works' component = {Works}></Route>
        <Route path = '/competitive-programming' component = {Compprog}></Route>
        <Route path = '/aboutme' component = {Aboutme}></Route>
        <Route path = '/skills' component = {Skills}></Route>



      </BrowserRouter>


    </div>
  );
}

export default App;
