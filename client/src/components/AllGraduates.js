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
        <Link to={{
          pathname: `/graduates/${graduate._id}`,
          state: {
            graduate: state
          }
          }}>{graduate.firstName} {graduate.lastName}</Link>
        <br/>
        </div>
       })
       console.log(state)
  return (
    <div className='Home'>
      <h1>All Graduates</h1>
      <div className='Filters'>
        <h2>Filters</h2>
        <h3>Industries</h3>
        <h3>Skills</h3>
        <h3>Learning</h3>
      </div>
      <div className='Graduates'>
        <h2>Search results</h2>
        <h2>{displayGraduates}</h2>
      </div>
    </div>
  )
}