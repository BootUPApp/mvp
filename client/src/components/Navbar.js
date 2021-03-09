import React from 'react'
import { Link } from 'react-router-dom';
import {logout} from '../services/auth'

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null)
  })
}

export default function Navbar(props) {
  console.log(props.user)
  return (
    <div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {/* If we have a logged in user -> show projects and logout otherwise show login and signup */}
        {props.user ? (
          <>
            <li>
              <Link to='/graduates'>All graduates</Link>
            </li>
            <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout {props.user.username}</Link>
            </li>
          </>
        ) : (
            <>
              <li>
                <Link to='/recruiter'>Recruiter Signup/Login</Link>
              </li>
              <li>
                <Link to='/graduate'>Graduate Signup/Login</Link>
              </li>
            </>
          )}
      </ul>
    </div>
  )
}
