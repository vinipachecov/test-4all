import React from 'react';
import PropTypes from 'prop-types';
import { View, Dimensions } from 'react-native';
import { Spinner } from 'native-base';
import { mainYellow } from '../../utils/colors';

const ScreenOverlayLoader = ({ loading }) => (
  loading
    ? (
      <View style={{
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        backgroundColor: 'rgba(252,252,252,0.5)',
        position: 'absolute',
        zIndex: 1,
      }}
      >
        <Spinner color={mainYellow} />
      </View>
    )
    : null
);

ScreenOverlayLoader.propTypes = {
  loading: PropTypes.bool.isRequired,
};


export default ScreenOverlayLoader;
