import React from 'react';
import PropTypes from 'prop-types';

class List extends React.Component{
   render(){
        return (<div style={{ display: '-webkit-box', display: 'flex', padding: '15px 0' }}>
          <img style={{ height: '64px', marginRight: '15px' }} src={this.props.obj.img} alt="" />
          <div style={{ lineHeight: 1 }}>
            <div style={{ marginBottom: '8px', fontWeight: 'bold' }}>{this.props.obj.des}</div>
          </div>
        </div>)
  }
}

List.propTypes = {
        obj:PropTypes.object
}

export default List;
