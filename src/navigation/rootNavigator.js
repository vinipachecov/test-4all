import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navigator from './routes';
import { actionCreators } from '../store/actions';
import NavigationService from './NavigationService';

const rootNavigator = () => (
  <Navigator
    ref={(navigatorRef) => {
      NavigationService.setTopLevelNavigator(navigatorRef);
    }}
  />
);

const bindAction = dispatch => Object.assign(
  { dispatch }, bindActionCreators(actionCreators, dispatch),
);

export default connect(
  null,
  bindAction,
)(rootNavigator);
