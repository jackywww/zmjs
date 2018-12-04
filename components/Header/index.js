import React from 'react';
import { FormattedMessage } from 'react-intl';
import { NavBar, Icon } from 'antd-mobile';

/* eslint-disable react/prefer-stateless-function */
class Header extends React.Component {
  render() {
    return (
      <div>
        <NavBar
          mode="light"
        >NavBar</NavBar>
      </div>
    );
  }
}

export default Header;
