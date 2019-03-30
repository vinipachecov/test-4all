import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, StyleSheet, Image, Linking, Text, TouchableOpacity, ScrollView, FlatList,
} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import { Container, Icon } from 'native-base';
// custom
import { mainYellow, white } from '../../../utils/colors';
import DadosLugar from '../../components/TelaPrincipal/DadosLugar';
import BarraNavegacao from '../../components/TelaPrincipal/BarraNavegacao';
import Comentario from '../../components/TelaPrincipal/Comentario';
import MapaItem from '../../components/TelaPrincipal/MapaItem';

const styles = StyleSheet.create({
  imageContainer: {
    height: 200,
    width: '100%',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  star: {
    position: 'absolute',
    right: 20,
    top: '85%',
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: white,
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const buttonList = [
  {
    name: 'LIGAR',
    iconName: 'telephone',
    iconType: 'Foundation',
  },
  {
    name: 'SERVIÇOS',
    iconName: 'diamond',
    iconType: 'FontAwesome',
  },
  {
    name: 'ENDEREÇO',
    iconName: 'map-marker',
    iconType: 'FontAwesome',
  },
  {
    name: 'COMENTÁRIOS',
    iconName: 'comments',
    iconType: 'FontAwesome',
  },
  {
    name: 'FAVORITOS',
    iconName: 'star',
    iconType: 'FontAwesome',
  },
];

export class TelaPrincipal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
    this.scrollView = null;
  }

  onHeaderLeftPress() {
    const { navigation } = this.props;
    navigation.goBack();
  }

  onShowAddress(state) {
    this.setState({ modalVisible: state });
  }


  onOpenPhone() {
    const { tarefa } = this.props;
    Linking.openURL(`tel://${tarefa.telefone}`);
  }

  onButtonListPress(name) {
    const { navigation } = this.props;
    switch (name) {
      case 'LIGAR':
        this.onOpenPhone();
        break;
      case 'SERVIÇOS':
        navigation.navigate('TelaServicos');
        break;
      case 'ENDEREÇO':
        this.onShowAddress(true);
        break;
      case 'COMENTÁRIOS':
        break;
      case 'FAVORITOS':
        break;
      default:
        console.log('error');
    }
  }


  render() {
    const { tarefa } = this.props;
    const { modalVisible } = this.state;
    const comentarios = tarefa.comentarios.map((item, index) => ({ ...item, id: index }));
    return (
      <Container>
        <ScrollView>
          <BarraNavegacao
            bairro={tarefa.bairro}
            cidade={tarefa.cidade}
            leftPress={() => this.onHeaderLeftPress()}
          />
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{ uri: tarefa.urlFoto }}
              resizeMethod="auto"
              resizeMode="cover"
            />
            <View
              style={styles.star}
            >
              <Icon
                style={{
                  color: mainYellow,
                  fontSize: 40,
                }}
                name="star"
                type="FontAwesome"
              />
            </View>
          </View>
          {/* Caixa  de descrição */}
          <DadosLugar
            listaBotoes={buttonList}
            tarefa={tarefa}
            onButtonListPress={name => this.onButtonListPress(name)}
          />
          <MapaItem
            endereco={tarefa.endereco}
            latitude={tarefa.latitude}
            longitude={tarefa.longitude}
          />
          <FlatList
            data={comentarios}
            renderItem={({ item }) => (
              <Comentario
                key={item.id}
                comentario={item.comentario}
                titulo={item.titulo}
                foto={item.urlFoto}
                nota={item.nota}
                usuario={item.nome}
              />
            )}
            keyExtractor={item => item.id.toString()}
          />
          <Modal
            isVisible={modalVisible}
            style={{
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <View style={{
              height: 100,
              width: 100,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'white',
            }}
            >
              <Text>{tarefa.endereco}</Text>
              <TouchableOpacity
                onPress={() => this.onShowAddress(false)}
              >
                <Text>Fechar Modal</Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </ScrollView>
      </Container>
    );
  }
}


TelaPrincipal.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
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
};

const mapStateToProps = state => ({
  tarefa: state.tarefaData.tarefaData,
});


export default connect(mapStateToProps, null)(TelaPrincipal);
