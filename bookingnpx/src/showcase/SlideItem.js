import React, { Component } from 'react';
import styled from 'styled-components';
import ImageComponent from './ImageComponent'
import ProductDetailComponent from './ProductDetailComponent'

const Slide = styled.div`
  height: 100%;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  font-size: 15px;
  font-family: "Amazon Ember Arial sans-serif";  
  text-align: left;
`;

class SlideItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Slide>
                <ImageComponent data={this.props.data}/>
                <ProductDetailComponent data={this.props.data}/>
            </Slide>
        );
    }
}
export default SlideItem;