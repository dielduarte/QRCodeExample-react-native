import React from 'react';
import { StyleSheet, View } from 'react-native';

import QRCodeScan from './containers/QRCodeScan';
import QRCodeDecoder from './containers/QRCodeDecoder';

const App = () => {
  return (
    <View style={styles.container}>
      <QRCodeScan />
      <QRCodeDecoder />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
