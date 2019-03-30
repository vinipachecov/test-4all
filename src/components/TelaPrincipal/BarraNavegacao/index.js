import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Header, Icon } from 'native-base';
import Button from '../../Button';
import { mainYellow, white } from '../../../../utils/colors';


const styles = StyleSheet.create({
  HeaderSide: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderBody: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  HeaderButton: {
    backgroundColor: 'transparent',
    height: 42,
    width: 42,
    margin: 0,
  },
  HeaderTitle: {
    color: white,
    fontSize: 12,
  },
  leftButton: {
    alignItems: 'flex-start',
  },
  rightButton: {
    alignItems: 'flex-end',
  },
  iconHeader: {
    color: white,
    fontSize: 18,
  },
  headerMapMarker: {
    fontSize: 18,
    paddingRight: 5,
    color: white,
  },
});

const BarraNavegacao = ({
  leftPress, cidade, bairro, rightPress,
}) => (
  <Header
    style={{
      backgroundColor: mainYellow,
      height: 30,
    }}
    androidStatusBarColor={mainYellow}
  >
    <View style={styles.HeaderSide}>
      <Button
        style={{ ...styles.HeaderButton, ...styles.leftButton }}
        onPress={() => leftPress()}
      >
        <Icon
          name="caretleft"
          type="AntDesign"
          color={white}
          style={styles.iconHeader}
        />
      </Button>
    </View>
    <View style={styles.HeaderBody}>
      <Icon
        style={styles.headerMapMarker}
        name="map-marker"
        type="FontAwesome"
      />
      <Text style={styles.HeaderTitle}>{`${cidade} - ${bairro}`}</Text>
    </View>
    <View style={styles.HeaderSide}>
      <Button
        style={{ ...styles.HeaderButton, ...styles.rightButton }}
        onPress={() => rightPress()}
      >
        <Icon
          name="ios-search"
          type="Ionicons"
          color={white}
          style={styles.iconHeader}
        />
      </Button>
    </View>
  </Header>
);

BarraNavegacao.defaultProps = {
  rightPress: () => {},
};

BarraNavegacao.propTypes = {
  leftPress: PropTypes.func.isRequired,
  cidade: PropTypes.string.isRequired,
  bairro: PropTypes.string.isRequired,
  rightPress: PropTypes.func,
};

export default BarraNavegacao;
