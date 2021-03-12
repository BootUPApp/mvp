
import React from 'react'
import { Link } from 'react-router-dom';
import image1 from '../images/recLog1.jpg'
import image2 from '../images/recLog2.jpg'
import image3 from '../images/recLog3.jpg'
import image4 from '../images/recLog4.jpg'
import image5 from '../images/recLog5.jpg'
import image6 from '../images/recLog6.webp'
import image7 from '../images/recLog7.jpg'
import image8 from '../images/recLog8.jpg'
import image9 from '../images/recLog9.png'
import image10 from '../images/recLog10.jpg'
import image11 from '../images/recLog11.jpg'
import image12 from '../images/recLog12.jpg'


export default function Recruiter() {
  return (
    
    <div className="absolouteRecruiterAccess">

    <div className="middlePicker">
    <h1>👋こんにちは👋</h1>
      <h1>Find the most motivated bootcamp graduates</h1>
      <br/>
      <Link to={'/recruiter/signup'}><button className="hvr-grow"><h1>Sign Up</h1></button></Link>
      <Link to={'/recruiter/login'}><button className="hvr-grow"><h1>Log In</h1></button></Link>
    </div>

      <div className="recruiterAcccesRowOne">
          <div style={{backgroundImage: `url(${image1})`}}></div>
          <div style={{backgroundImage: `url(${image2})`}}></div>
          <div style={{backgroundImage: `url(${image3})`}}></div>
          <div style={{backgroundImage: `url(${image4})`}}></div>
      </div>

      <div className="recruiterAcccesRowTwo">
      <div style={{backgroundImage: `url(${image5})`}}></div>
      <div style={{backgroundImage: `url(${image6})`}}></div>
      <div style={{backgroundImage: `url(${image7})`}}></div>
      <div style={{backgroundImage: `url(${image8})`}}></div>
      </div>

      <div className="recruiterAcccesRowThree">
      <div style={{backgroundImage: `url(${image9})`}}></div>
      <div style={{backgroundImage: `url(${image10})`}}></div>
      <div style={{backgroundImage: `url(${image11})`}}></div>
      <div style={{backgroundImage: `url(${image12})`}}></div>
      </div>

    </div>
    </div>
  )
}

/*
<button> <Link to={'/recruiter/login'}><h1>Login</h1></Link></button>
     
<button><Link to={'/recruiter/signup'}><h1>Sign Up</h1></Link></button>

<div className='accessPage'>
<h1>Recruiter access</h1>
<Link to={'/recruiter/login'}>Login</Link>
<br/>
<Link to={'/recruiter/signup'}>Signup</Link>

</div>
*/