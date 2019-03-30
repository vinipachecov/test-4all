import React, { PureComponent } from 'react';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FlatList, TouchableNativeFeedback, View } from 'react-native';
import {
  Container, Text, Header, Left, Right, Body, Title,
} from 'native-base';
import ListSeparator from '../../components/ListSeparator';
import { mainYellow } from '../../../utils/colors';
import { tarefaActions } from '../../store/actions';
import ScreenOverlayLoader from '../../components/ScreenOverlayLoader';

class TelaInicial extends PureComponent {
  async componentDidMount() {
    const { getTarefas } = this.props;
    getTarefas();
  }


  render() {
    const { loading, tarefas, selectTarefa } = this.props;
    return (
      <Container>
        <Header androidStatusBarColor={mainYellow} style={{ backgroundColor: mainYellow }}>
          <Left />
          <Body>
            <Title>Tela Inicial</Title>
          </Body>
          <Right />
        </Header>
        <FlatList
          ListHeaderComponent={ListSeparator}
          style={{
            marginTop: 40,
          }}
          data={tarefas}
          renderItem={({ item }) => (
            <TouchableNativeFeedback
              style={{
                backgroundColor: 'transparent',
                height: 38,
              }}
              background={TouchableNativeFeedback.Ripple('rgba(0,0,0,0.05)', false)}
              onPress={() => selectTarefa(item.tarefa)}
            >
              <View style={{
                flex: 1,
                padding: 5,
                justifyContent: 'center',
                alignItems: 'center',
              }}
              >
                <Text style={{ color: 'black' }}>{item.tarefa}</Text>
              </View>
            </TouchableNativeFeedback>
          )}
          ItemSeparatorComponent={ListSeparator}
          keyExtractor={item => item.id}
          ListFooterComponent={ListSeparator}
        />
        <ScreenOverlayLoader loading={loading} />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  tarefas: state.tarefaData.tarefas,
  loading: state.tarefaData.loading,
});

const mapDispatchToProps = {
  getTarefas: tarefaActions.getTarefas,
  selectTarefa: tarefaActions.selectTarefa,
};

TelaInicial.defaultProps = {
  tarefas: [],
};

TelaInicial.propTypes = {
  loading: PropTypes.bool.isRequired,
  getTarefas: PropTypes.func.isRequired,
  selectTarefa: PropTypes.func.isRequired,
  tarefas: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    tarefa: PropTypes.string.isRequired,
  })),
};

export default connect(mapStateToProps, mapDispatchToProps)(TelaInicial);
