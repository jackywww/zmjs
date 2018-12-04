import React from 'react';
import PropTypes from 'prop-types';
import A from 'components/A';
import ImageWrapper from './ImageWrapper';
import Image from './Image';
import Info from './Info';
import Title from './Title';
import Price from './Price';
import PriceI from './PriceI';
import Small from './Small';
import Sold from './Sold';

class ProductItem extends React.Component{
   render(){
        return (<A>
          <ImageWrapper><Image src={this.props.obj.img} alt="" /></ImageWrapper>
          <Info>
            <Title>{this.props.obj.des}</Title>
            <Price>
              <PriceI>￥</PriceI>
              99
              <Small>.12</Small>
              <Sold>月销4.9万笔</Sold>
            </Price>
          </Info>
        </A>)
  }
}

ProductItem.propTypes = {
        obj:PropTypes.object
}

export default ProductItem;
