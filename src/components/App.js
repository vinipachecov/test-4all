/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Provider } from 'react-redux';
import RootNavigator from '../navigation/rootNavigator';
import store from '../store';

export default () => (
  <Provider store={store}>
    <RootNavigator />
  </Provider>
);
