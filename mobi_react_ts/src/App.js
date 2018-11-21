import React, { Component } from 'react';
import Navber from './Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'



class App extends Component {
    state={
    }

    render() {
        return ( 
            <BrowserRouter>
                <div className = "App" >
                    <Navber/>
                    <Route exact path='/' component={Home} />
                    <Route path='/About' component={About} />
                    <Route path='/Contact' component={Contact} />
                </div>
            </BrowserRouter>
        );
    }
}

export default App;