import React from 'react';

import App from 'js/components/app';
import { shallow } from 'enzyme';

describe('App', function() {
  beforeEach(function() {
    this.spec.component = shallow(<App />);
  });

  it('it greets the world!', function() {
    expect(this.spec.component.text()).to.eq('Hello, World!');
  });
});
