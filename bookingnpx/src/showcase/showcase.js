import React, { Component, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';

const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  margin: 0 auto;
`;

const SlideItem = styled.div`
  height: 200px;
  width: 160px;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  font-weight: bold;
`;

class Showcase extends Component {

  constructor(props){
    super(props);
    this.state = {
        activeItemIndex: 0
      };
  }

  render() {
    return (
        <Wrapper>
            <ItemsCarousel
                requestToChangeActive={value => this.setState({ activeItemIndex: value })}
                activeItemIndex={this.state.activeItemIndex}
                leftChevron={'<'}
                rightChevron={'>'}
                infiniteLoop={false}
                gutter={15}
                activePosition={'center'}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={9}
                slidesToScroll={3}
                outsideChevron={true}
                showSlither={true}
                firstAndLastGutter={true}
                >
                    {Array.from(new Array(18)).map((_, i) =>
                    <SlideItem key={i}>
                        {i+1}
                    </SlideItem>
                    )}
            </ItemsCarousel>
        </Wrapper>
    );
  }
}
export default Showcase;