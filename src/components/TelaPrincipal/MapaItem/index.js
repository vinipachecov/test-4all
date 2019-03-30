import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import { mainYellow, white } from '../../../../utils/colors';

const styles = StyleSheet.create({
  mapContainer: {
    justifyContent: 'flex-start',
    height: '25%',
    width: '100%',
  },
  mapStyle: {
    height: '100%',
    width: '100%',
  },
  bottomLineContainer: {
    height: '25%',
    width: '100%',
    flexDirection: 'row',
    backgroundColor: mainYellow,
    position: 'absolute',
    bottom: 0,
    justifyContent: 'center',
  },
  addressStyle: {
    color: white,
    marginLeft: '20%',
  },
  mapMarkerContainer: {
    height: 50,
    width: 50,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: white,
    position: 'absolute',
    right: 0,
    bottom: '20%',
    zIndex: 3,
    elevation: 1,
  },
  mapMarker: {
    color: mainYellow,
  },
});


const MapaItem = ({ longitude, latitude, endereco }) => (
  <View style={styles.mapContainer}>
    <MapView
      provider={PROVIDER_GOOGLE} // remove if not using Google Maps
      style={styles.mapStyle}
      initialRegion={{
        latitude,
        longitude,
        latitudeDelta: 0.0042,
        longitudeDelta: 0.0031,
      }}
      rotateEnabled={false}
      scrollEnabled={false}
      zoomControlEnabled={false}
      showsBuildings={false}

    >
      <Marker
        coordinate={{
          latitude,
          longitude,
        }}
      />
    </MapView>
    <View style={styles.bottomLineContainer}>
      <Text style={styles.addressStyle}>{endereco}</Text>
      <View
        style={styles.mapMarkerContainer}
      >
        <Icon
          name="map-marker"
          type="FontAwesome"
          style={styles.mapMarker}
        />
      </View>
    </View>
  </View>
);

MapaItem.propTypes = {
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  endereco: PropTypes.string.isRequired,
};

export default MapaItem;
