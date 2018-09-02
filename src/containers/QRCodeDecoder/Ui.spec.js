import React from 'react';
import { shallow } from 'enzyme';

import Ui from './Ui';

describe('QRCodeDecoder Ui', () => {
  it('should render correctly', () => {
    const props = {
      source: '',
      showImagePicker: () => {},
      onSuccess: () => {},
      onError: () => {}
    };
    const Component = shallow(<Ui props={props} />);
    expect(Component).toMatchSnapshot();
  });
});
