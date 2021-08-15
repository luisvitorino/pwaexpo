import React from 'react';
import { FlatList, View, Image, StyleSheet, Text} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



function topImage() {
  return (
    //<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //<Text>Home!</Text>
    //</View>
    <View>
      <Image source={ require('./top.jpg')} style={styles.topImage}/>
    </View>
  );
}


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <View>
      {topImage()}
    </View>
  );
}

const styles = StyleSheet.create({

  topImage: {
    width: 500,
    height: 130,
    justifyContent: 'space-between',
  },

})

//export default Rest;