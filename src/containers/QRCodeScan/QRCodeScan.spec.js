import React from 'react';
import { shallow } from 'enzyme';
import QRCodeScan, { onBarCodeRead } from './QRCodeScan';

describe('QRCodeScan', () => {
  it('should render correctly', () => {
    const component = shallow(<QRCodeScan />).dive();
    expect(component).toMatchSnapshot();
  });

  describe('onBarCodeRead', () => {
    it('should called an alert with the data value and setShowCamera prop passing false as value', () => {
      const props = {
        setShowCamera: jest.fn(),
        showCamera: true
      };
      const data = {
        data: 'https://lisk.io'
      };

      onBarCodeRead(props)(data);

      expect(props.setShowCamera).toHaveBeenCalledWith(false);
      expect(global.alert).toHaveBeenCalledWith(data.data);
    });
  });
});
