import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNCamera } from 'react-native-camera';
import PropTypes from 'prop-types';

const Camera = ({ onBarCodeRead }) => {
  return (
    <View style={styles.container}>
      <RNCamera
        style={styles.preview}
        type={RNCamera.Constants.Type.back}
        flashMode={RNCamera.Constants.FlashMode.off}
        permissionDialogTitle={'Permission to use camera'}
        permissionDialogMessage={'We need your permission to use your camera phone'}
        onBarCodeRead={onBarCodeRead}
        barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
      />
    </View>
  );
};

Camera.propTypes = {
  onBarCodeRead: PropTypes.func.isRequired
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 300
  },
  preview: {
    flex: 1
  }
});

export default Camera;
