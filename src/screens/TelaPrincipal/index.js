import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  View, StyleSheet, Image, Linking, Text, TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import PropTypes from 'prop-types';
import {
  Container, Icon,
} from 'native-base';
// custom
import { mainYellow, white } from '../../../utils/colors';
import DadosLugar from '../../components/TelaPrincipal/DadosLugar';
import BarraNavegacao from '../../components/TelaPrincipal/BarraNavegacao';

const styles = StyleSheet.create({
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

class TelaPrincipal extends Component {
  constructor() {
    super();
    this.state = {
      modalVisible: false,
    };
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
    try {
      Linking.openURL(`tel://${tarefa.telefone}`);
    } catch (error) {
      console.log(error);
    }
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
    return (
      <Container>
        <BarraNavegacao
          bairro={tarefa.bairro}
          cidade={tarefa.cidade}
          leftPress={() => this.onHeaderLeftPress()}
        />
        <View style={{
          flex: 1,
        }}
        >
          <View style={{
            height: '40%',
            width: '100%',
          }}
          >
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
        </View>
        <Modal
          isVisible={modalVisible}
        >
          <View style={{
            height: 100,
            width: 100,
            justifyContent: 'center',
            alignItems: 'center',
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
};

const mapStateToProps = state => ({
  tarefa: state.tarefaData.tarefaData,
});


export default connect(mapStateToProps, null)(TelaPrincipal);
