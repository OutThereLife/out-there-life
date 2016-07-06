import React, { Component, PropTypes } from 'react';

export default class Page extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  }

  render() {
    return (
      <div className='container'>
        {this.props.children}
      </div>
    );
  }
}
