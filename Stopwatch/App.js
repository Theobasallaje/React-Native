import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StopWatchContainer from './stopwatch/stopwatch.container';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hey Austin!</Text>
      <StopWatchContainer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: '#DBD053',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: "8%",
  },

  title: {
    fontSize: 30,
    color: "#74526C",
    marginBottom: "8%"
  }

});
