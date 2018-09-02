import React, { Fragment } from 'react';
import QRdecoder from 'react-native-qrimage-decoder';

import Button from '../../components/Button';

const Ui = ({ source, showImagePicker, onSuccess, onError }) => {
  return (
    <Fragment>
      <Button title="Scan from gallery" onPress={showImagePicker} />
      <QRdecoder src={source} onSuccess={onSuccess} onError={onError} />
    </Fragment>
  );
};

export default Ui;
