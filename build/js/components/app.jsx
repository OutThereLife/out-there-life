import React, { Component } from 'react';
import Page from './elements/page';
import DirectoryContainer from './employees/directory_container';

export default class App extends Component {
  render() {
    return (
      <Page>
        <DirectoryContainer />
      </Page>
    );
  }
}
