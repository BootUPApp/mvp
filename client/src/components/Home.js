import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Home() {
  const [state, setState] = useState([])
  // console.log(state)

  useEffect (() => {
    axios.get('/api/recruiters')
    .then(response => {
       console.log('Hi from axios,', response)
      setState(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  const displayRecruiters = state.map((recruiter) => {
        return recruiter.username
       })
       console.log(state)
  return (
    <div className='Home'>
      <h1>bootUP!</h1>
      <h2>Hello {displayRecruiters}</h2>
      <p>Filter through thousands of fresh bootcamp graduates and find your super perfect candidate that you can proudly show at your next company's xmas party...</p>
      <Link to={'/recruiter'}>Recruiter signup/login</Link>
      <br />
      <Link to={'/graduate'}>Graduate signup/login</Link>
    </div>
  )
}