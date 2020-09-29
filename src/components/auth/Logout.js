import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../../redux'
import { Redirect } from 'react-router-dom'

export const Logout = (props) => {
  if (props.authData.isLoggedIn) {
    props.logout();
  }
  let redirect = <Redirect
    to={{
      pathname: "/login"
    }}
  />;

  return (
    <div>
      {
        (!props.authData.isLoggedIn) ? redirect : null
      }
    </div>
  )
}

const mapStateToProps = (state) => ({
  authData: state.authData
})

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(logout())
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     fetchCovidData: (id) => dispatch(fetchCovidData(id))
//   }
// }

export default connect(mapStateToProps, mapDispatchToProps)(Logout)
