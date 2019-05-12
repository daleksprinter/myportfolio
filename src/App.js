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
import { IoLogoGithub,  IoLogoTwitter } from 'react-icons/io'

const NavItem = ({to, name}) => {
  const style = {
    'padding' : 20,
  }
  return(
    <div style = {style}>
      <Typography variant="h6" color='default'>
        <Link to = {to}>{name}</Link>
      </Typography>
    </div>
  )
}

const Header = () => {

      const navbarmenu = {
        'float':'left',
        'margin':'auto',
      }

      const blogfont = {
        'padding':20,
        'font-size': 50,
        'font-family': 'cursive',
      }

      return(
        <AppBar position = 'static'>
            <Typography variant="h5" color="inherit" style = {{'text-align':'center',}}>
              <div style = {blogfont}>Rapio's Portfolio</div>
            </Typography>
          <div style = {navbarmenu}>
            <Toolbar color = 'inherit'>
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

const Fundamental = () => {

  const me = {
    'position':'fixed',
    'margin-top': '2%',
    'right':'0%',
    'width': '18%',
    'padding':'1%',
  }

  const av = {
    'text-align': 'center',
  }

  const avater = {
    'width':'50%',
    'border-radius': '50%',
  }

  const socialicon = {
    'margin': '3%',
  }

  const sociallink = {
    'margin':'auto',
    'text-align': 'center',
  }
  return(
      <Paper style = {me}>
          <div style = {av}>
              <img src = {hoge} style = {avater}></img>
          </div>
          <p>基本情報</p>
          <ul>
              <li>Handle : らぴお</li>
              <li>Gender : 男</li>
              <li>Age : 22</li>
              <li>Condition : とても健康</li>
              <li>Major : 情報科学</li>
              <li>Belongs : 公立はこだて未来大学大学院　</li>
              <li>Department : 情報アーキテクチャ領域</li>
              <li>Grade : 修士1年 </li>
          </ul>
          <div style = {sociallink}>
                <a href = 'https://github.com/daleksprinter'>
                  <IoLogoGithub size = '40' style = {socialicon} />                
                </a>

                <a href = 'https://twitter.com/Gxupu50ILbqonRQ'>
                  <IoLogoTwitter size = '40' style = {socialicon}/>
                </a>
          </div>
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
