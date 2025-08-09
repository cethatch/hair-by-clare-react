import logo from '../images/svgs/logo.svg';
import React, { Component } from 'react';

class Logo extends Component {
  render() {
    return <img src={logo} alt="Logo" className={this.props.className} />;
  }
}

export default Logo;