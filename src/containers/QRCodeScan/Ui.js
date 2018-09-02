import React, { Fragment } from 'react';

import Button from '../../components/Button';
import Camera from '../../components/Camera';

const Ui = ({ showCamera, setShowCamera, onBarCodeRead }) => {
  return (
    <Fragment>
      <Button title="Scan" onPress={() => setShowCamera(!showCamera)} />
      {showCamera && <Camera onBarCodeRead={onBarCodeRead} />}
    </Fragment>
  );
};

export default Ui;
