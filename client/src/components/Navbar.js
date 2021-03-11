import React from 'react'
import { Link } from 'react-router-dom';
import { logout } from '../services/auth'

const handleLogout = props => {
  logout().then(() => {
    props.setUser(null)
  })
}

export default function Navbar(props) {
  // console.log(props.user)
  return (
    <nav>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        {/* If we have a logged in user -> show projects and logout otherwise show login and signup */}
        {props.user ? (
          props.user.role === 'Recruiter' ? (
            <>
            <li><Link to={`/recruiter/edit/${props.user._id}`}>Edit your profile</Link></li>
            <li>
              <Link to='/graduates'>View all graduates</Link>
            </li>
            <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout {props.user.username}</Link>
            </li>
          </>
          ) : (
            <>
            <li><Link to={`/graduate/edit/${props.user._id}`}>Edit Graduate profile</Link></li>
            <li>
              <Link to='/graduates'>View all graduates</Link>
            </li>
            <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout {props.user.username}</Link>
            </li>
          </>
          )
          
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
    </nav>
  )
}
