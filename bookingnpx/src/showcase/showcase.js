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
  flex-direction: column;
  font-size: 15px;
  font-family: "Amazon Ember Arial sans-serif";  
  text-align: left;
`;

const TitleText = styled.text`
  color: #0066c0!important;
  font-size: 13px!important;
  word-break: normal;
  line-height: 1.3em !important;
  width: 100%;
  margin: 3px`;

const InstallmentText = styled.text`
  font-size: 13px!important;
  color: #555;
  line-height: 1.3em !important;
  width: 100%;
`;

const CurrencyPrice = styled.text`
  list-style: decimal;
  color: #111;
  font-size: 1.2em;
  font-weight: semi-bold
  `;

const CurrencyText = styled.text`
  text-align: left;
  color: #111;
  position: relative;
  top: -.5em;
  font-size: 10px;`;

const SellerText = styled.text`
  color: #555;
  font-size: 11px;
  line-height: 1.25;
  width: 100%;
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
                <div style={{top: '0px !important', height: '50%'}}>
                  <img src={entri[1].image.extraLarge != null ? entri[1].image.extraLarge : entri[1].image.large}
                    alt={entri[1].image.name + "Image"}
                    style={{width: '100%'}}></img>
                </div>
                <div style={{
                  margin: 5, 
                  height: '50%', 
                  marginTop: '1.2em',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'flex-start',
                  }}>
                  <TitleText>{entri[1].name}</TitleText>
                  <InstallmentText>{entri[1].installment}</InstallmentText>
                  <div style={{margin: '8px', textAlign: 'center'}}> 
                    <CurrencyPrice>{entri[1].offerPrice}</CurrencyPrice>
                    <CurrencyText>{entri[1].currency}</CurrencyText>
                  </div>
                  <SellerText>{entri[1].sellerName}</SellerText>
                </div>
              </SlideItem>
            )}
        </ItemsCarousel>
      </Wrapper>
    );
  }
}
export default Showcase;