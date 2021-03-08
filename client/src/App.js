import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';

import RecSign from './components/RecSign';

import Recruiter from './components/Recruiter';
import Graduate from './components/Graduate';
import GraduateLogin from './components/GraduateLogin'
import GraduateSignup from './components/GraduateSignup'
import RecruiterLogin from './components/RecruiterLogin'
import RecruiterSignup from './components/RecruiterSignup'


class App extends React.Component {
  
state = {
  signedIn: '',
}

componentDidMount(){
  this.getData();
}

getData = () => {
  this.setState({
    recUser: this.props.user
  })
}

  render(){
    // console.log(this.state.recUser);
  return (
    <div>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />

        <Route exact path="/rec"  component={RecSign}/>

        <Route exact path='/recruiter' component={Recruiter} />
        <Route exact path='/graduate' component={Graduate} />
        <Route exact path='/graduate/login' component={GraduateLogin} />
        <Route exact path='/graduate/signup' component={GraduateSignup} />
        <Route exact path='/recruiter/login' component={RecruiterLogin} />
        <Route exact path='/recruiter/signup' component={RecruiterSignup} />

      </Switch> 
    </div>
  )
}
}

export default App;