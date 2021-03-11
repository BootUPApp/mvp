import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import hoverEffect from 'hover-effect'

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

 // style={{backgroundImage: `url("${graduate.imageUrl}")`}}

       render(){
        console.log('All graduates:', this.state.users)

        let searchResults = this.state.users.filter((graduate) => {
          return graduate.firstName.toLowerCase().includes(this.state.query) ||
          graduate.lastName.toLowerCase().includes(this.state.query)
          // || graduate.skills.toLowerCase().includes(this.state.query)
            })
        
        let displayGraduates = searchResults.map(graduate => {

          new hoverEffect({
            parent: document.querySelector(".gradPics"),
            intensity: 0.3,
            image1: "`${graduate.imageUrl}`",
            image2: "`${graduate.imageUrl}`",
            displacementImage:
              "https://raw.githubusercontent.com/robin-dela/hover-effect/master/images/fluid.jpg"
          });

          return(
       
            <div className="allgrads" key={graduate._id}>
              <div className='gradPics' style={{backgroundImage: `url("${graduate.imageUrl}")`}}></div>
              <div>
             <Link to={{
               pathname: `/graduates/${graduate._id}`,
             state: {
                graduate: this.state.users
               }
              }}>{graduate.firstName} {graduate.lastName}</Link>




</div>
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
          
              <div className="meso">
              {displayGraduates}
              </div> 
          </div>
        )
       }
  
}
export default AllGraduates;