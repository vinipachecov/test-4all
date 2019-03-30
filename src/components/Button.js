import React from 'react';
import {
  TouchableNativeFeedback, TouchableOpacity, Platform, View,
} from 'react-native';
import PropTypes from 'prop-types';

const Button = ({
  ripple, style, overlayColor, children, onPress, containerStyle,
}) => {
  if (ripple) {
    return Platform.OS === 'android'
      ? (
        <TouchableNativeFeedback
          style={{
            ...style,
          }}
          background={TouchableNativeFeedback.Ripple(overlayColor)}
          onPress={() => onPress()}
        >
          {children}
        </TouchableNativeFeedback>
      )
      : (
        <TouchableOpacity
          style={style}
          onPress={() => onPress()}
        >
          {children}
        </TouchableOpacity>
      );
  }
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      containerStyle={containerStyle}
    >
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        ...style,
      }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  ripple: false,
  style: {},
  overlayColor: 'rgba(0,0,0,0.1)',
  children: null,
  containerStyle: {},
};

Button.propTypes = {
  onPress: PropTypes.func.isRequired,
  ripple: PropTypes.bool,
  containerStyle: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    background: PropTypes.string,
    zIndex: PropTypes.number,
  }),
  style: PropTypes.shape({
    height: PropTypes.number,
    width: PropTypes.number,
    background: PropTypes.string,
    zIndex: PropTypes.number,
  }),
  overlayColor: PropTypes.string,
  children: PropTypes.node,
};

export default Button;
