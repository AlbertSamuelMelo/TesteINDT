import React, { Component } from 'react';
import './App.css';
import Showcase from './showcase/Showcase'
import library from './librairu.json'

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showcase:[],
    }
  }
  componentWillMount(){
    var showcase =[];
    showcase.push(<Showcase data={library} parentContext={this}/>);
    this.setState({
      showcase: showcase
    })
  }
  render() {
    return (
      <div className="App">
        {this.state.showcase}
      </div>
    );
  }
}
export default App;