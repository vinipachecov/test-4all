import React from 'react';
import { View } from 'react-native';
import { Icon } from 'native-base';
import { mainYellow } from '../../../../utils/colors';


const Avaliacao = ({ nota }) => {
  const listaEstrelas = [];
  for (let i = 0; i < nota; i += 1) {
    listaEstrelas.push('1');
  }

  const estrelas = listaEstrelas.map(estrela => (
    <Icon
      style={{
        fontSize: 10,
        color: mainYellow,
        marginRight: 5,
      }}
      name="star"
      type="FontAwesome"
    />
  ));

  return (
    <View style={{
      height: 20,
      flexDirection: 'row',
      alignItems: 'center',
      flexWrap: 'wrap',
    }}
    >
      { estrelas }
    </View>
  );
};

export default Avaliacao;
