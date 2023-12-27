import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      value:0
    }
  }
  adding=()=>{
    this.setState({
      value: this.state.value+1
    })
  }
  subtracting=()=>{
    this.setState({
      value: this.state.value-1
    })
  }
  reset=()=>{
    this.setState({
      value: 0
    })
  }
  render(){
    return (
      <div>
        
      <h1>Counter App</h1>

        <h2>Counter</h2>
        <h1>{this.state.value}</h1>
        <div>
          <button onClick={this.adding}>+</button>
          <button onClick={this.subtracting}>-</button>
          <button onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }
}
export default App;