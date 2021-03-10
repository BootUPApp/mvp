import { React, useState } from 'react';
import { Link } from 'react-router-dom';
// import axios from 'axios';

const Capitalise = (str) =>{
  return str.charAt(0).toUpperCase() + str.slice(1);
  }

export default function Home() {
  
  return (
    <div className='Home'>
      <h1>bootUP!</h1>
      <h2>Hello</h2>
      <p>Filter through thousands of fresh bootcamp graduates and find your super perfect candidate that you can proudly show at your next company's xmas party...</p>
      <Link to={'/recruiter'}>Recruiter entrance</Link>
      <br />
      <Link to={'/graduate'}>Graduate entrance</Link>
    </div>
  )
}

export { Capitalise }