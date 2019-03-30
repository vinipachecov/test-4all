import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { mainYellow } from '../../../../utils/colors';

const styles = StyleSheet.create({
  icone: {
    fontSize: 10,
    color: mainYellow,
    marginRight: 5,
  },
  container: {
    height: 20,
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginRight: 10,
  },
});

const Avaliacao = ({ nota }) => {
  const listaEstrelas = [];
  for (let i = 0; i < nota; i += 1) {
    listaEstrelas.push('1');
  }

  const estrelas = listaEstrelas.map((estrela, i) => (
    <Icon
      key={i}
      style={styles.icone}
      name="star"
      type="FontAwesome"
    />
  ));

  return (
    <View style={styles.container}>
      { estrelas }
    </View>
  );
};

Avaliacao.propType = {
  nota: PropTypes.number.isRequired,
};

export default Avaliacao;
