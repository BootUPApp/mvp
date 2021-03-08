import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Home extends React.Component {


  useEffect (() => {
    axios.get('/api/recruiter')
    .then(response => {
       console.log('Hi from axios,', response.data[0].firstName)
      setState(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
    
  const displayRecruiters = state.map((recruiter) => {
        return recruiter.firstName
       })

       console.log(state)

  return (
    <div className='Home'>
      <h1>bootUP!</h1>
      <h2>Hello {displayRecruiters}</h2>
      <p>Filter through thousands of fresh bootcamp graduates and find your super perfect candidate that you can proudly show at your next company’s xmas party...</p>
      <Link to={'/recruiter'}>Recruiter signup/login</Link>
      <br />
      <Link to={'/graduate'}>Graduate signup/login</Link>
    </div>
  )

}

export default Home;