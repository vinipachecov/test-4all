import React from 'react';
import { View, StyleSheet } from 'react-native';


const styles = StyleSheet.create({
  separator: {
    height: StyleSheet.hairlineWidth,
    width: '100%',
    backgroundColor: 'lightgray',
  },
});

const ListSeparator = () => (
  <View style={styles.separator} />
);


export default ListSeparator;
