import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Matrix from './Matrix';

describe('Matrix', () => {
  let props;
  let shallowMatrix;
  let renderedMatrix;
  let mountedMatrix;

  const shallowTestComponent = () => {
    if (!shallowMatrix) {
      shallowMatrix = shallow(<Matrix {...props} />);
    }
    return shallowMatrix;
  };

  const renderTestComponent = () => {
    if (!renderedMatrix) {
      renderedMatrix = render(<Matrix {...props} />);
    }
    return renderedMatrix;
  };

  const mountTestComponent = () => {
    if (!mountedMatrix) {
      mountedMatrix = mount(<Matrix {...props} />);
    }
    return mountedMatrix;
  };  

  beforeEach(() => {
    props = {};
    shallowMatrix = undefined;
    renderedMatrix = undefined;
    mountedMatrix = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
