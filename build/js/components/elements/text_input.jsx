import React, { Component, PropTypes } from 'react';

export default class TextInput extends Component {
  static propTypes = {
    value: PropTypes.string,
    onChange: PropTypes.func.isRequired
  };

  render() {
    return (
      <div>
        <input type='text' {...this.props} />
      </div>
    );
  }
}
