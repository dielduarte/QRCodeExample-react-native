import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import QRCodeDecoder from './QRCodeDecoder';

jest.mock('react-native-qrimage-decoder', () => 'QRdecoder');

describe('QRCodeDecoder tests', () => {
  it('should render correctly', () => {
    const component = shallow(<QRCodeDecoder />);
    expect(component).toMatchSnapshot();
  });
});
