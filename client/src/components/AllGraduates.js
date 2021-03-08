import { React, useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function AllGraduates() {
  const [state, setState] = useState([])
  // console.log(state)

  useEffect (() => {
    axios.get('/api/graduates')
    .then(response => {
       console.log('Hi from axios,', response)
      setState(response.data)
    })
    .catch(error => {
      console.log(error)
    })
  }, [])
  const displayGraduates = state.map((graduate) => {
        return <div key={graduate._id}>
        <Link to={`/graduate/${graduate._id}`}>{graduate.firstName} {graduate.lastName}</Link>
        <br/>
        </div>
       })
       console.log(state)
  return (
    <div className='Home'>
      <h1>All Graduates</h1>
      <h2>{displayGraduates}</h2>
    </div>
  )
}