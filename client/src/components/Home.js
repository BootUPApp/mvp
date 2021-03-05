import { React, useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {

  const [state, setState] = useState([])
  // console.log(state)

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
      <h1>Home</h1>
      <h5> HELLO {displayRecruiters}</h5>
    </div>
  )
}

