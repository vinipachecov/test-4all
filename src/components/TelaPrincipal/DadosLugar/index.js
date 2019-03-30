import React from 'react';
import {
  View, Text, ScrollView, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import { backgroundGray, mainYellow } from '../../../../utils/colors';
import Button from '../../Button';

const styles = StyleSheet.create({
  container: {
    flex: 1, width: '100%', backgroundColor: backgroundGray,
  },
  titulo: {
    fontSize: 20,
    marginLeft: 20,
    color: mainYellow,
    marginVertical: 5,
  },
  descricaoContainer: {
    backgroundColor: 'white',
    height: '100%',
  },
  listaBotoes: {
    height: 50,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  botaoIcone: {
    color: mainYellow,
    fontSize: 25,
  },
  botaoText: { fontSize: 8, color: mainYellow },
  separador: {
    marginBottom: 5,
    width: '90%',
    height: 1,
    alignSelf: 'center',
    backgroundColor: backgroundGray,
  },
  textoContainer: {
    minHeight: 90,
    width: '100%',
  },
  texto: {
    textAlign: 'justify',
    marginHorizontal: 20,
    fontSize: 12,
    color: mainYellow,
  },
});

const DadosLugar = ({ listaBotoes, tarefa, onButtonListPress }) => (
  <View style={styles.container}>
    <Text style={styles.titulo}>
      {
       tarefa.titulo.toUpperCase()
      }
    </Text>
    {/* Botões de ação e descições */}
    <View style={styles.descricaoContainer}>
      {/* List de botões */}
      <View style={styles.listaBotoes}>
        { listaBotoes.map(button => (
          <Button
            key={button.name}
            onPress={() => onButtonListPress(button.name)}
          >
            <Icon
              style={styles.botaoIcone}
              name={button.iconName}
              type={button.iconType}
            />
            <Text style={styles.botaoText}>{button.name}</Text>
          </Button>
        ))}
      </View>
      {/* LInha de separação */}
      <View style={styles.separador} />
      {/* Sobre */}
      <ScrollView
        style={styles.textoContainer}
      >
        <Text style={styles.texto}>
          {tarefa.texto}
        </Text>
      </ScrollView>
    </View>

  </View>
);

DadosLugar.propTypes = {
  tarefa: PropTypes.shape({
    id: PropTypes.string.isRequired,
    cidade: PropTypes.string.isRequired,
    urlFoto: PropTypes.string.isRequired,
    urlLogo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    comentarios: PropTypes.arrayOf(
      PropTypes.shape({
        urlFoto: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
        nota: PropTypes.number.isRequired,
        comentario: PropTypes.string.isRequired,
      }),
    ).isRequired,
  }).isRequired,
  listaBotoes: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string,
    iconName: PropTypes.string,
    iconType: PropTypes.string,
  })).isRequired,
};

export default DadosLugar;
