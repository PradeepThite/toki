/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';

function Home(): JSX.Element {
  return <Text style={styles.highlight}>Hello world</Text>;
}

const styles = StyleSheet.create({
  highlight: {
    fontWeight: '700',
    color: 'green',
    textAlign: 'center',
  },
});

export default Home;
