import Background from 'App/assets/svg-components/Background';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const HomeScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.background}>
        <Background />
      </View>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
  },
  background: {
    position: 'absolute',
    top: 0,
    right: 0,
    opacity: 0.1,
  },
});

export default HomeScreen;
