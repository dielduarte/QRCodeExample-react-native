/**
 * Isolate the bussines logic and Ui
 * I chosed recompose todo that in a easy way
 * in a real scenario, we can do it for example to:
 * 1 - use the bussines logic of the component on the web/mobile apps
 * without need to rewrite it.
 * 2 - keep the code more clean and testable.
 */

import { withHandlers, withState, compose } from 'recompose';
import ImagePicker from 'react-native-image-picker';

import Ui from './Ui';

export const getMimeType = uri => {
  const ext = uri.substr(uri.lastIndexOf('.')).toLowerCase();

  const mimeTypeExts = {
    '.jpg': 'jpeg',
    '.jpeg': 'jpeg',
    '.jpe': 'jpeg',
    '.png': 'png',
    '.gif': 'gif'
  };

  const mimetype = mimeTypeExts[ext];

  return mimetype ? `image/${mimetype}` : false;
};

export const isUriValid = uri => uri.lastIndexOf('.') > 0;

export const imagePickerCallBack = (props, response) => {
  if (response.didCancel) return;

  if (response.error) {
    console.log('ImagePicker Error: ', response.error);
    return;
  }

  const { uri, data } = response;

  if (isUriValid(uri)) {
    const mimetype = getMimeType(uri);

    if (mimetype) {
      const source = `data:${mimetype};base64,${data}`;
      props.setSource(source);
    }
  }
};

const QRCodeDecoder = compose(
  withState('source', 'setSource', ''),
  withHandlers({
    showImagePicker: props => () => {
      ImagePicker.showImagePicker(response => imagePickerCallBack(props, response));
    },
    onSuccess: () => data => {
      alert(data);
    },
    onError: () => data => {
      alert(data);
    }
  })
);

export default QRCodeDecoder(Ui);
