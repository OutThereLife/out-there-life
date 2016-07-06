import React from 'react';

import App from 'js/components/app';
import { shallow } from 'enzyme';

import DirectoryContainer from 'js/components/employees/directory_container';
import Page from 'js/components/elements/page';

describe('App', function() {
  beforeEach(function() {
    this.spec.component = shallow(<App />);
  });

  it('renders a Page', function() {
    expect(this.spec.component.find(Page)).to.have.length(1);
  });

  it('renders the DirectoryContainer within the Page', function() {
    expect(this.spec.component.find(Page).find(DirectoryContainer)).to.have.length(1);
  });
});
