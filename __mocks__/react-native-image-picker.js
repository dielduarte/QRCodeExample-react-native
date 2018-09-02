import ImagePicker from 'react-native-image-picker';

jest.mock('react-native-image-picker', () => {
  return {
    showImagePicker: jest.fn()
  };
});

export default ImagePicker;
