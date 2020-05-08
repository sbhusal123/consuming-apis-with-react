import React, {Component} from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import Post from './components/Post'

class  App extends Component {
  /*
  - Basically router matches all the patterns it sees
  - Extra props is passed to the component when using Route component for routing and url hendelling.
  - Can be avoided using <Switch/> component. At any point in time only one route take precedence
  */
  render(){
      return(
        <BrowserRouter>
          <div className="App">
            <Navbar />
            <Switch> 
              <Route exact path='/' component={Home} />
              <Route  path='/about' component={About} />
              <Route  path='/contact' component={Contact} />
              <Route  path='/:post_id' component={Post} />
            </Switch>
          </div>
        </BrowserRouter>
      );
  }
}

export default App;
