import React from 'react'
import {Link, NavLink, withRouter} from 'react-router-dom'


/*
 -  Link prevents the default behaviour of <a> tag i.e page reload
 - NavLink provides the active class on the a tag
*/


const Navbar = (props) => {

  /* Programatic Redirection

  -  It is actually impossible to Programatically redirect without using Router but the trick is it      can be wrapped into the Router component using Higher component  Initially NavBar is not wrapped    into Router component.
  -  Basically it is like typecasting the component or wrapping it

    setTimeout(() => {
       props.history.push('/about') // doesn't works if this component is not Router
    }, 2000);

  */

  return(
    <nav className="nav-wrapper red darken-3">
      <div className="container">
        <a className="brand-logo" href="/">Poke'Times</a>
        <ul className="right">
          <li><Link to="/">Home</Link></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

// Higher order component. Wrapping it into Router component.
export default withRouter(Navbar);