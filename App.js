import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';

export default function App() {
  return (
      <SafeAreaView style={{backgroundColor: "red", flex: 1}}>
          <View style={[styles.container, {backgroundColor: "white"}]}>
              <Text>Open up App.js to start working on your app!</Text>
          </View>
      </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
