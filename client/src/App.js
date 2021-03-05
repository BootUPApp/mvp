import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Recruiter from './components/Recruiter';
import Graduate from './components/Graduate';
import GraduateLogin from './components/GraduateLogin'
import GraduateSignup from './components/GraduateSignup'

export default function App() {
  return (
    <div>
    <Navbar/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/recruiter' component={Recruiter} />
        <Route exact path='/graduate' component={Graduate} />
        <Route exact path='/graduate/login' component={GraduateLogin} />
        <Route exact path='/graduate/signup' component={GraduateSignup} />
      </Switch> 
    </div>
  )
}
