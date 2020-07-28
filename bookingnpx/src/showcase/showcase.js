import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';

const chevronWidth = 40;

const Wrapper = styled.div`
  padding: 0 ${chevronWidth}px;
  margin: 3%;
`;

const SlideItem = styled.div`
  height: 100%;
  background: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: bold;
  flex-direction: column;
`;

class Showcase extends Component {

  constructor(props){
    super(props);
    this.state = {
        activeItemIndex: 0,
        numberOfCards: (window.innerWidth > 1000 ? 9 : ~~(window.innerWidth/100))
      };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    var numberOfCards = 0
    if (window.innerWidth > 1000) {
      numberOfCards = 9
    }else{
      numberOfCards = ~~(window.innerWidth/100)
    }
    this.setState({ numberOfCards: numberOfCards });
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
                chevronWidth={chevronWidth}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={this.state.numberOfCards}
                slidesToScroll={1}
                outsideChevron={true}
                showSlither={true}
                firstAndLastGutter={true}
                >
                    {Array.from(Object.entries(this.props.data.products)).map((entri, i) =>
                    <SlideItem key={i}>
                        <img src={entri[1].image.extraLarge != null ? entri[1].image.extraLarge : entri[1].image.large} 
                             alt={entri[1].image.name + "Image"}
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