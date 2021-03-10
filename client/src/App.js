import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './components/Home';
import RecruiterAccess from './components/RecruiterAccess';
import GraduateAccess from './components/Graduate';
import GraduateLogin from './components/GraduateLogin'
import GraduateSignup from './components/GraduateSignup'
import RecruiterLogin from './components/RecruiterLogin'
import RecruiterSignup from './components/RecruiterSignup'
import AllGraduates from './components/AllGraduates';
import SelectedGraduate from './components/SelectedGraduate'
import ProtectedRoute from './components/ProtectedRoute'
import RecruiterDashboard from './components/RecruiterDashboard'
import GraduateDashboard from './components/RecruiterDashboard'
import RecruiterEdit from './components/RecruiterEdit'


class App extends React.Component {
  
state = {
  user: this.props.user,
}

// Sets the user via the parameter
setUser = user => {
  this.setState({
    user: user
  })
}

  render(){

  return (
    <div>
    <Navbar user={this.state.user} setUser={this.setUser}/>
      <Switch>
        <Route 
          exact path='/'
          component={Home}
          />
        <Route
          exact path='/recruiter'
          component={RecruiterAccess}
          />
        <Route 
          exact path='/graduate' 
          component={GraduateAccess}
          />
        <Route 
          exact path='/graduate/login' 
          render={props => <GraduateLogin setUser={this.setUser} {...props} />}
          />
        <Route 
          exact path='/graduate/signup'
          render={props => <GraduateSignup setUser={this.setUser} {...props} />} 
          />
        <Route
          exact path='/recruiter/login'
          render={props => <RecruiterLogin setUser={this.setUser} {...props} />} 
          />
        <Route
          exact path='/recruiter/signup' /*component={RecruiterSignup} */ 
          render={props => <RecruiterSignup setUser={this.setUser} {...props} />} 
          />
        <ProtectedRoute
          exact path='/recruiter/dashboard/:id'
          user={this.state.user}
          component={RecruiterDashboard}
          redirectPath='/recruiter/login'
        />
        <ProtectedRoute
          exact path='/graduate/dashboard/:id'
          user={this.state.user}
          component={GraduateDashboard}
          redirectPath='/recruiter/login'
        />
        <ProtectedRoute
          exact path='/graduates'
          user={this.state.user}
          component={AllGraduates}
          redirectPath='/recruiter/login'
        />
        <ProtectedRoute
          exact path='/graduates/:id'
          user={this.state.user}
          component={SelectedGraduate}
          redirectPath='/recruiter/login'
        />
        <ProtectedRoute
          exact path='/recruiter/edit/:id'
          user={this.state.user}
          setUser={this.setUser}
          // render={props => <RecruiterEdit setUser={this.setUser} user={this.state.user} {...props} />}
          component={RecruiterEdit}
          redirectPath='/recruiter/login'
        />
        <ProtectedRoute
          exact path='/graduate/edit/:id'
          user={this.state.user}
          component={RecruiterEdit}
          redirectPath='/recruiter/login'
        />
      </Switch> 
    </div>
  )
}
}

export default App;
