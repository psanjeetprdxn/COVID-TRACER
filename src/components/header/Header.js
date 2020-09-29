import React from 'react'
import './header.css'

import Nav from './nav/Nav'
import Logo from './logo/Logo'

function Header() {
  return (
    <header>
      <div className="wrapper">
        <Logo />
        <Nav />
      </div>
    </header>
  )
}

export default Header
