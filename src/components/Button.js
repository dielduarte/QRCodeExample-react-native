/**
 * The decision to create this button component,
 * was just to simulate a real design/style guide
 * where we'll have buttons and other primitive components
 * and we using the primitive components of react-native
 * to create they..
 */
import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

const Button = ({ title, onPress }) => {
  return <Button onPress={onPress} title={title} />;
};

Button.defaultProps = {
  title: '',
  onPress: () => {}
};

Button.propTypes = {
  title: PropTypes.string,
  onPress: PropTypes.func
};

export default Button;
