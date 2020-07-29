import React, { Component } from 'react';
import styled from 'styled-components';

/* 
    Component render products details
    @props - data: json - Here we recive the JSON of our Store

*/

/* 
    Styles used by products details
*/
const ProductDetail = styled.div`
    padding: 5px;
    height: 50%;
    width: 90%;
    margin-top: 1.2em;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

const TitleText = styled.text`
    color: #0066c0!important;
    font-size: 13px!important;
    word-break: normal;
    line-height: 1.3em !important;
    width: 100%;
    margin: 3px
`;

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
    font-size: 10px;
`;

const SellerText = styled.text`
    color: #555;
    font-size: 11px;
    line-height: 1.25;
    width: 100%;
`;


class ProductDetailComponent extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <ProductDetail>
                <TitleText>{this.props.data[1].name}</TitleText>
                <InstallmentText>{this.props.data[1].installment}</InstallmentText>
                    <div style={{margin: '8px', textAlign: 'center'}}> 
                        <CurrencyPrice>{this.props.data[1].offerPrice}</CurrencyPrice>
                        <CurrencyText>{this.props.data[1].currency}</CurrencyText>
                    </div>
                <SellerText>{this.props.data[1].sellerName}</SellerText>
            </ProductDetail>
        );
    }
}
export default ProductDetailComponent;