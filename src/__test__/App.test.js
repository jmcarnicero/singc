import React from 'react';
import App from './../App';
import { render } from './test-utils'

describe('<App />', () => {
  let wrapper, getByText;
  const initialState = {};

  beforeEach(() => {
    const utils = render(<App />, { initialState });
    wrapper = utils.container;
    getByText = utils.getByText;
  });

  it('renders the component', () => {
    expect(wrapper.querySelector('.App')).toBeInTheDocument();
  });
});
