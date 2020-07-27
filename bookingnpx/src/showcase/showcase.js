import React, { Component } from 'react';

class Showcase extends Component {

  constructor(props){
    super(props);
  }

  render() {
    return (
      <div style={style.showcase}>
        <text>{String(this.props.data.immutableId)}</text>
      </div>
    );
  }
}
const style = {
    showcase:{
        margin: 15,
    }
};
export default Showcase;