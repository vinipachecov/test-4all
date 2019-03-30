import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import {
  Container, Header, Left, Button, Icon, Right,
} from 'native-base';
import { white, mainYellow } from '../../../utils/colors';

const styles = StyleSheet.create({
  header: {
    backgroundColor: mainYellow,
  },
  headerLeft: {
    backgroundColor: mainYellow,
    elevation: 0,
  },
  headerIcon: {
    fontSize: 18,
  },
});

export class TelaServicos extends Component {
  onHeaderLeftPress() {
    const { navigation } = this.props;
    navigation.goBack();
  }

  render() {
    return (
      <Container>
        <Header
          style={styles.header}
          androidStatusBarColor={mainYellow}
        >
          <Left>
            <Button
              onPress={() => this.onHeaderLeftPress()}
              style={styles.headerLeft}
            >
              <Icon
                name="caretleft"
                type="AntDesign"
                color={white}
                style={styles.headerIcon}
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
    goBack: PropTypes.func,
  }).isRequired,
};


export default TelaServicos;
