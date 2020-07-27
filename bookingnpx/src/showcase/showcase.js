import React, { Component, useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';

const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  margin: 0 auto;
  max-width: 1600px;
`;

const SlideItem = styled.div`
  height: 100%;
  width: 160px;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  flex-direction: column;
  margin: 15px !important;
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
                activePosition={'center'}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={9}
                slidesToScroll={1}
                outsideChevron={true}
                showSlither={true}
                firstAndLastGutter={true}
                >
                    {Array.from(Object.entries(this.props.data.products)).map((entri, i) =>
                    <SlideItem key={i}>
                        <img src={entri[1].image.extraLarge} 
                             onError={(e)=>{e.target.src=entri[1].image.large}}
                            style={{width: '100%'}}></img>
                        {entri[1].name}
                        <text>{entri[1].installment}</text>
                        <text>{entri[1].offerPrice + " " + entri[1].currency}</text>
                        <text>{entri[1].sellerName}</text>
                        
                    </SlideItem>
                    )}
            </ItemsCarousel>
        </Wrapper>
    );
  }
}
export default Showcase;                        


                        //ratingAverage