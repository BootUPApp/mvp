import React from 'react';
import {Link} from 'react-router-dom'


class Home extends React.Component {

  render(){
    return(
      <div>
      <h1>Hello Motto</h1>
      <Link to="/rec">Recruiter</Link>
      </div>
    )
  }
  
}

export default Home;