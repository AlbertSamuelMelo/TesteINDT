import React, { Component } from 'react';
import './App.css';
import Showcase from './showcase/Showcase'
import Axios from 'axios';


/* App structure 
  here we init our component class after get following url data
*/
class App extends Component {
  constructor(props){
    super(props);
    this.state={
      showcase:[],
    }
  }
  componentWillMount(){
    var showcase =[];
    Axios.get('https://blackbox-v1-submarino.b2w.io/defer/produto/1708602357?pfm_carac=livro').then((response)=>{
      console.log(response)
      showcase.push(<Showcase data={response.data} parentContext={this}/>);
      this.setState({
        showcase: showcase
      })
    });
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