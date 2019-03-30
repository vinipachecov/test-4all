import React from 'react';
import {
  View, Text, FlatList, ScrollView,
} from 'react-native';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import { backgroundGray, mainYellow } from '../../../../utils/colors';
import Button from '../../Button';
import Comentario from '../Comentario';
import MapaItem from '../MapaItem';

const DadosLugar = ({ listaBotoes, tarefa, onButtonListPress }) => (
  <View style={{ flex: 1, backgroundColor: backgroundGray, justifyContent: 'center' }}>
    <Text style={{
      fontSize: 20,
      marginLeft: 20,
      marginTop: 10,
      color: mainYellow,
    }}
    >
      {
            tarefa.titulo.toUpperCase()
            }
    </Text>
    {/* Botões de ação e descições */}
    <View style={{
      backgroundColor: 'white',
      height: '40%',
    }}
    >
      {/* List de botões */}
      <View style={{
        height: '35%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
      >
        { listaBotoes.map(button => (
          <Button
            onPress={() => onButtonListPress(button.name)}
          >
            <Icon
              style={{
                color: mainYellow,
                fontSize: 20,
              }}
              name={button.iconName}
              type={button.iconType}
            />
            <Text style={{ fontSize: 8, color: mainYellow }}>{button.name}</Text>
            {/* </View> */}
          </Button>
        ))}
      </View>
      {/* LInha de separação */}
      <View style={{
        marginBottom: 5,
        width: '90%',
        height: 1,
        alignSelf: 'center',
        backgroundColor: backgroundGray,
      }}
      />
      {/* Sobre */}
      <ScrollView>
        <Text style={{
          textAlign: 'justify',
          marginHorizontal: 20,
          fontSize: 12,
          color: mainYellow,
        }}
        >
          {tarefa.texto}
        </Text>
      </ScrollView>
    </View>
    {/* Mapa */}
    <MapaItem
      endereco={tarefa.endereco}
      latitude={tarefa.latitude}
      longitude={tarefa.longitude}
    />
    <FlatList
      style={{
        flex: 1,
      }}
      data={tarefa.comentarios}
      renderItem={({ item }) => (
        <Comentario
          comentario={item.comentario}
          titulo={item.titulo}
          foto={item.urlFoto}
          nota={item.nota}
          usuario={item.nome}
        />
      )}
      keyExtractor={item => item.urlFoto}
    />
  </View>
);

DadosLugar.propTypes = {
  tarefa: PropTypes.shape({
    id: PropTypes.number.isRequired,
    cidade: PropTypes.string.isRequired,
    urlFoto: PropTypes.string.isRequired,
    urlLogo: PropTypes.string.isRequired,
    titulo: PropTypes.string.isRequired,
    telefone: PropTypes.string.isRequired,
    texto: PropTypes.string.isRequired,
    endereco: PropTypes.string.isRequired,
    latitude: PropTypes.number,
    longitude: PropTypes.number,
    comentarios: PropTypes.arrayOf({
      urlFoto: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      nota: PropTypes.number,
      comentario: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  listaBotoes: PropTypes.arrayOf({}).isRequired,
};

export default DadosLugar;
