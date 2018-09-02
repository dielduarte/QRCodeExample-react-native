import React from 'react';
import { shallow } from 'enzyme';

import Ui from './Ui';

describe('QRCodeScan Ui', () => {
  it('should render correctly', () => {
    const props = { showCamera: true, setShowCamera: () => {}, onBarCodeRead: () => {} };
    const Component = shallow(<Ui props={props} />);
    expect(Component).toMatchSnapshot();
  });
});
