import React, { Component } from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={
      count:0
    }
  }
  adding=()=>{
    this.setState({
      count: this.state.count+1
    })
  }
  subtracting=()=>{
    this.setState({
      count: this.state.count-1
    })
  }
  reset=()=>{
    this.setState({
      count: 0
    })
  }
  render(){
    return (
      <div className="App">
        
      <h1>Counter App</h1>

        <h2>Counter</h2>
        <h1>{this.state.count}</h1>
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