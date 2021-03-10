import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class AllGraduates extends React.Component {
  
  state = {
    users: [],
    query: ''
  }

  componentDidMount() {
    axios.get('/api/graduates')
    .then(response => {
       console.log('Hi from axios,', response)
      this.setState({
        users: response.data
      })
    })
    .catch(error => {
      console.log(error)
    })
  }

  handleChange = event => {
    console.log(event.target.value)
    let searchQuery = event.target.value.toLowerCase();
    this.setState(() => ({
      query: searchQuery,
    }))
  }

       render(){
        console.log('All graduates:', this.state.users)

        let searchResults = this.state.users.filter((graduate) => {
          return graduate.firstName.toLowerCase().includes(this.state.query) ||
          graduate.lastName.toLowerCase().includes(this.state.query)
          // || graduate.skills.toLowerCase().includes(this.state.query)
            })
        
        let displayGraduates = searchResults.map(graduate => {
          return(
            <div key={graduate._id}>
             <Link to={{
               pathname: `/graduates/${graduate._id}`,
             state: {
                graduate: this.state.users
               }
              }}>{graduate.firstName} {graduate.lastName}</Link>
             <br/>
          </div>
          )
         })



        return (
          <div className='Home'>
            <h1>All Graduates</h1>
            <form>
            <label htmlFor="query">Search: </label>
                      <input
                      type="text"
                      id="query"
                      name="query"
                      value={this.state.query}
                      onChange={this.handleChange}
                      />
            </form>
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
  
}
export default AllGraduates;