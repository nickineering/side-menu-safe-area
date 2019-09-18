import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import SideMenu from "react-native-side-menu";

export default function App() {
  const menu = <View style={{backgroundColor: "blue"}}><Text>I'm in the menu</Text></View>
  return (
      <SafeAreaView style={{backgroundColor: "red", flex: 1}}>
        <SideMenu menu={menu}>
          <View style={[styles.container, {backgroundColor: "white"}]}>
              <Text>Open up App.js to start working on your app!</Text>
          </View>
        </SideMenu>
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
