import QRdecoder from 'react-native-qrimage-decoder';

jest.mock('react-native-qrimage-decoder', () => 'QRdecoder');

export default QRdecoder;
