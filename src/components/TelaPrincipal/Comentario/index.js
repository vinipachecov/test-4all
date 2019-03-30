import React from 'react';
import {
  View, ScrollView, Text, Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { white, mainYellow } from '../../../../utils/colors';
import Avaliacao from '../Avaliacao';

const styles = StyleSheet.create({

});


const Comentario = ({
  comentario, titulo, foto, nota, usuario,
}) => (
  <View style={{
    width: '100%',
    backgroundColor: white,
    flexDirection: 'row',
  }}
  >
    {/* Foto */}
    <View
      style={{
        height: 50,
        width: 50,
        borderRadius: 50,
        marginLeft: 15,
        marginTop: 10,
        overflow: 'hidden',
        alignSelf: 'flex-start',
      }}
    >
      <Image
        style={{
          height: '100%',
          width: '100%',
        }}
        source={{ uri: foto }}
        resizeMethod="auto"
        resizeMode="cover"
      />
    </View>
    <ScrollView style={{
      flex: 1,
    }}
    >
      <Text style={{
        marginLeft: 10, marginTop: 10, fontSize: 12, color: mainYellow,
      }}
      >
        {usuario}
      </Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
      >
        <Text style={{ marginLeft: 10, fontSize: 12, color: mainYellow }}>{titulo}</Text>
        {/* avaliação */}
        <Avaliacao nota={nota} />

      </View>
      <Text style={{
        marginLeft: 10, fontSize: 12, color: mainYellow, textAlign: 'justify',
      }}
      >
        {comentario}
      </Text>
    </ScrollView>
  </View>
);

Comentario.propTypes = {
  nota: PropTypes.number.isRequired,
  titulo: PropTypes.string.isRequired,
  comentario: PropTypes.string.isRequired,
  usuario: PropTypes.string.isRequired,
  foto: PropTypes.string.isRequired,
};

export default Comentario;
