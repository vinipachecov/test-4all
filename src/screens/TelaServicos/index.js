import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import {
  Container, Header, Left, Button, Icon, Right,
} from 'native-base';
import { white, mainYellow } from '../../../utils/colors';

class TelaServicos extends Component {
  onHeaderLeftPress() {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Header
          style={{
            backgroundColor: mainYellow,
          }}
          androidStatusBarColor={mainYellow}
        >
          <Left>
            <Button
              onPress={() => this.onHeaderLeftPress()}
              style={{
                backgroundColor: mainYellow,
                elevation: 0,
              }}
            >
              <Icon
                name="caretleft"
                type="AntDesign"
                color={white}
                style={{
                  fontSize: 18,
                }}
              />
            </Button>
          </Left>
          <Right />
        </Header>
        <Text>Tela de serviços</Text>
      </Container>
    );
  }
}

TelaServicos.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};


export default TelaServicos;
