import React, { Component, PropTypes } from 'react';
import loader from 'images/loader.gif';

export default class Loader extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    children: PropTypes.node.isRequired
  }

  _renderLoader() {
    return (
      <div className='text-center'>
        <img alt='Loading...' src={loader} />
      </div>
    );
  }

  _renderChildren() {
    return <div>{this.props.children}</div>;
  }

  render() {
    return (
      this.props.loading ? this._renderLoader() : this._renderChildren()
    );
  }
}
