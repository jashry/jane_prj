import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navber = ()=>{
  return (
    <div className="container">
      <h3>Navber page</h3>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navber