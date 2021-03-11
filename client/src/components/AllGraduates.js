import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import hoverEffect from 'hover-effect'

class AllGraduates extends React.Component {
  
  state = {
    users: [],
    query: '',
    actualUsers:""
  }

  Capitalise = (str) =>{
    return str.charAt(0).toUpperCase() + str.slice(1);
    }

  componentDidMount() {
    this.sendGetRequest()
    // axios.get('/api/graduates')
    // .then(response => {
    //    console.log('Hi from axios,', response.data)
       
    //   this.setState({
    //     users: response.data
    //   })
    // })
    // .catch(error => {
    //   console.log(error)
    // })
  }

 async sendGetRequest () {
  const request = await axios.get('/api/graduates')
  const response = await request.data
  this.setState({users: response})
  console.log(this.state.users, "state after request inside of function")
const fucker =   this.handlerUserShit(response)
this.setState({
  actualUsers: fucker
})
console.log(this.state.actualUsers, "actualusers in funcrion")
}

  handleChange = event => {
    console.log(event.target.value)
    let searchQuery = event.target.value.toLowerCase();
    this.setState(() => ({
      query: searchQuery,
    }))
  }

handlerUserShit(wholeUserResponse) {
  let list;
 for (let user of wholeUserResponse ) {
    list += user
    
 }
 console.log(list, "list at outside function")
}


 // style={{backgroundImage: `url("${graduate.imageUrl}")`}}

       render(){

      //   if(this.state.actualUsers.length !== 0) {
      //  const inPutList =   this.state.actualUsers.map((user, index) => {
      //       return user.InputList
      //     })
      //     let skills = inPutList.map((skill, index) => {
      //       return <h1>{skill.skill}</h1>
      //     })
      //   }
       
        console.log(this.state.users, "state after render")

        
        const getSkillsArray = this.state.users.map((grads,index) => {
            return grads.InputList;
        })

        console.log('Hi its me', )

        const getDeeperInside = getSkillsArray.map((grads, index)=> {
          return grads[index]
        })

        console.log(getDeeperInside)

        let searchResults = this.state.users.filter((graduate) => {
          return graduate.firstName.toLowerCase().includes(this.state.query) ||
          graduate.lastName.toLowerCase().includes(this.state.query)
          // || graduate.skills.toLowerCase().includes(this.state.query)
            })
        
        let displayGraduates = searchResults.map(graduate => {

      

          return(
       
            <div className="allgrads" key={graduate._id}>
              <div className='gradPics' style={{backgroundImage: `url("${graduate.imageUrl}")`}}></div>
              <div>
             <Link to={{
               pathname: `/graduates/${graduate._id}`,
             state: {
                graduate: this.state.users
               }
              }}>{this.Capitalise(graduate.firstName)} {this.Capitalise(graduate.lastName)}</Link>

              </div>
          </div>
          
          )
         })



        return (
          <div className='allGraduates'>
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

            {/* <div className='keywordSearch'>

            <h2>Industries</h2>
            <button onClick={this.handleClick}>Gastronomy</button>
            <button onClick={this.handleClick}>Art</button>
            <button onClick={this.handleClick}>Consulting</button>
            <button onClick={this.handleClick}>Politics</button>
            <button onClick={this.handleClick}>HR</button>
            <button onClick={this.handleClick}>Gastronomy</button>

            <h2>Skills</h2>
            <a onClick={this.handleClick}>React</a>
            <a onClick={this.handleClick}>Express</a>
            <a onClick={this.handleClick}>MongoDB</a>
            <a onClick={this.handleClick}>Node</a>
            <a onClick={this.handleClick}>Handlebars</a>

            </div> */}
          
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