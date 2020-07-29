import React, { Component } from 'react';
import ItemsCarousel from 'react-items-carousel';
import styled from 'styled-components';
import SlideItem from './SlideItem';

/* 
  Showcase is our main component that will fill the other components with data
  @props - data: json - Here we recive the JSON of our Store
*/
const chevronWidth = 40; //Size of Carousel button

/*
  Styles of our main container
*/
const ShowcaseContainer = styled.div`
  padding: 0 ${chevronWidth}px;
  margin: 3%;
`;

class Showcase extends Component {

  constructor(props){
    super(props);
    this.state = {
      activeItemIndex: 0,
      numberOfCards: (window.innerWidth > 1000 ? 9 : ~~(window.innerWidth/100) -1 )
      };
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  
  // Function that changes Carousel number of cards
  updateDimensions() {
    var numberOfCards = 0
    if (window.innerWidth > 1000) {
      numberOfCards = 9
    }else{
      numberOfCards = ~~(window.innerWidth/100) -1
    }
    this.setState({ numberOfCards: numberOfCards });
  }

  render() {
    return (
      <ShowcaseContainer>
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
              <SlideItem key={i} data={entri}/>
            )}
        </ItemsCarousel>
      </ShowcaseContainer>
    );
  }
}
export default Showcase;