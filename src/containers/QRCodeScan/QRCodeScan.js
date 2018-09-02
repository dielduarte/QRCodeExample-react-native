/**
 * Isolate the bussines logic and Ui
 * I chosed recompose todo that in a easy way
 * in a real scenario, we can do it for example to:
 * 1 - use the bussines logic of the component on the web/mobile apps
 * without need to rewrite it.
 * 2 - keep the code more clean and testable.
 */

import { withHandlers, withState, compose } from 'recompose';
import Ui from './Ui';

export const onBarCodeRead = props => data => {
  const { setShowCamera, showCamera } = props;

  alert(data.data);
  setShowCamera(!showCamera);
};

const QRCodeScan = compose(
  withState('showCamera', 'setShowCamera', false),
  withHandlers({ onBarCodeRead })
);

export default QRCodeScan(Ui);
