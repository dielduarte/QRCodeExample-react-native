import React from 'react';
import { shallow } from 'enzyme';
import ImagePicker from 'react-native-image-picker';

ImagePicker.showImagePicker = jest.fn();

import QRCodeDecoder, { getMimeType, isUriValid, imagePickerCallBack } from './QRCodeDecoder';

describe('QRCodeDecoder', () => {
  it('should render correctly', () => {
    const component = shallow(<QRCodeDecoder />).dive();
    expect(component).toMatchSnapshot();
  });

  describe('imagePickerCallBack', () => {
    it(`should return false if response.didCancel isn't null or undefined`, () => {
      const response = {
        didCancel: true
      };

      expect(imagePickerCallBack({}, response)).toBeFalsy();
    });

    it(`should return false if response.error isn't null or undefined`, () => {
      const response = {
        error: true
      };

      expect(imagePickerCallBack({}, response)).toBeFalsy();
    });

    it(`should call setSource prop passing the correct base64 source`, () => {
      const response = { uri: 'path-to-image.jpeg', data: 'falseDatabase64==' };
      const props = { setSource: jest.fn() };
      const expectedValue = `data:image/jpeg;base64,${response.data}`;
      imagePickerCallBack(props, response);

      expect(props.setSource).toHaveBeenCalledWith(expectedValue);
    });
  });

  describe('getMimeType', () => {
    it('should return the correct mime type when getMimeType is called', () => {
      expect(getMimeType('path-to-image.jpeg')).toEqual('image/jpeg');
    });

    it('should return false when getMimeType is called passing a non allowed format as param', () => {
      expect(getMimeType('path-to-image.docx')).toBeFalsy();
    });
  });

  describe('isUriValid', () => {
    it('should return true if uri passed is valid', () => {
      expect(isUriValid('path-to-image.jpeg')).toBeTruthy();
    });

    it(`should return false if uri passed haven't extension`, () => {
      expect(isUriValid('path-to-image')).toBeFalsy();
    });
  });

  it('should call ImagePicker.showImagePicker when showImagePicker prop is called', () => {
    const component = shallow(<QRCodeDecoder />).dive();
    component.props().showImagePicker();
    expect(ImagePicker.showImagePicker).toHaveBeenCalled();
  });
});
