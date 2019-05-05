import React, { Component } from 'react'
import { BrowserRouter, Link, Route } from 'react-router-dom'

class Navbar extends Component{

    render(){
        return(
            <div>
                <Link to = '/'>Home</Link>
                <Link to = '/works'>Works</Link>
                <Link to = '/aboutme'>AboutMe</Link>
            </div>  
        )
    }
}

export default Navbar