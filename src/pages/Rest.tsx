import React from 'react';
import { FlatList, View, Image, StyleSheet, Text} from 'react-native';
import { ScreenContainer } from 'react-native-screens';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';



function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    //<NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    //</NavigationContainer>
  );
}

const Rest: React.FC = () => {

  //Primeira seção

  return (
 
    <div>

    </div>
  

  )  
}

const styles = StyleSheet.create({
  member: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 20
    },

  image: {
      width: 48,
      height: 32,
      borderRadius: 24,
      marginRight: 16,
    }
})

//export default Rest;