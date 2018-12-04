import React from 'react';
import { FormattedMessage } from 'react-intl';
import { ListView } from 'antd-mobile';
import PropTypes from 'prop-types';

import ProductItem from 'components/ProductItem';
import LeftColumn from 'components/LeftColumn';
import RightColumn from 'components/RightColumn';

/* eslint-disable react/prefer-stateless-function */
class ProductList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      leftColumn : [],
      rightColumn: []
    };
  }

  componentDidMount(){
    let leftArr = [];
    let rightArr = [];
    let that = this;
    this.props.data.forEach(function(item,index){
      let oHeightDiff =  that.leftColumn.offsetHeight - that.rightColumn.offsetHeight;
      console.log(oHeightDiff, that.leftColumn.offsetHeight, that.rightColumn.offsetHeight)
      if(index%2 == 0){
          //左边高，新表格添加到右边
          leftArr.push(item);
      }else{
          //右边高，或一样高，新表格添加到左边
          rightArr.push(item);
      }
    });
    this.setState(prevState=>({
      leftColumn : prevState.leftColumn.concat(leftArr),
      rightColumn : prevState.rightColumn.concat(rightArr)
    }));
  }

  render() {
    const data = this.props.data;
    console.log(this.state)

    return (
      <section id="templatesWrap" style={{backgroundColor: '#eee'}}>
      <LeftColumn className="leftColumn" ref={(lc)=>{this.leftColumn = lc}}>
        {
          this.state.leftColumn.map((item,index)=>{
            return <ProductItem key={index} obj={item} />
          })
        }
      </LeftColumn>
      <RightColumn className="rightColumn" ref={(rc)=> { this.rightColumn = rc }}>
        {
          this.state.rightColumn.map((item,index)=>{
            return <ProductItem key={index} obj={item} />
          })
        }
      </RightColumn>
    </section>
    );
  }
}

ProductList.propTypes = {
        data:PropTypes.array
}
export default ProductList;
