import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import RecSign from './components/RecSign';
import axios from 'axios';

class App extends React.Component {
  
state = {
  recUser: '',
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
    console.log(this.state.recUser);
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path="/rec"  component={RecSign}/>
      </Switch> 
    </div>
  )
}
}

export default App;