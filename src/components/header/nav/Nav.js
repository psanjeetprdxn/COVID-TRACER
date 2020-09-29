import React from 'react'
import { connect } from 'react-redux'
import {NavLink} from 'react-router-dom'

export const Nav = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/" exact title="Home">Home</NavLink>
        </li>
        <li>
          <NavLink to="/todo" title="Todo">Todo</NavLink>
        </li>
        <li>
          <NavLink to="/logout" title="Logout">Logout</NavLink>
        </li>
      </ul>
    </nav>
  )
}

const mapStateToProps = (state) => ({
  
})

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
