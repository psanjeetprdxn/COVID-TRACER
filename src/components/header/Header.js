import React from 'react'
import { connect } from 'react-redux'

import Nav from './nav/Nav'
import './header.css'
import Logo from './logo/Logo'

export const header = (props) => {
  return (
    <>
      {(props.authData.isLoggedIn) ? (<header>
        <div className="wrapper">
          <Logo />
          <Nav />
        </div>
      </header>) : null}
    </>
  )
}

const mapStateToProps = (state) => ({
  authData: state.authData
})

export default connect(mapStateToProps)(header)

