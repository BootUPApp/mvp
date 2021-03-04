import logo from './logo.svg';
import './App.css';
import React from 'react';
import axios from 'axios';



class App extends React.Component {

state = {
  data: []
}

componentDidMount(){
  this.getData();
}

getData = () => {
  axios.get('/api/recruiter').then(response => {
    console.log('Hi from axios', response.data[0].firstName)
    this.setState({
      data: response.data
    })
  }).catch(error => {
    console.log(error)
  })
}


 render() {
   const displaySimon = this.state.data.map((simon) => {
    return simon.firstName
   })
  return (
    <div className="App">
      <header className="App-header">
        <h1>{displaySimon}</h1>
        
      </header>
    </div>
  );
}
}

export default App;
