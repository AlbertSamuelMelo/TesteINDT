import React, { Component } from 'react';
import styled from 'styled-components';

const ImageContainer = styled.div`
    top: 0px !important;
    height: 50%;
`;
class ImageComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ImageContainer>
                <img src={this.props.data[1].image.extraLarge != null ? this.props.data[1].image.extraLarge : this.props.data[1].image.large}
                    alt={this.props.data[1].image.name + "Image"}
                    style={{width: '100%'}}/>
            </ImageContainer>
        );
    }
}
export default ImageComponent;