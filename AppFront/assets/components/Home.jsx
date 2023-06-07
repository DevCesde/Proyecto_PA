import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//estilos, pueden copiar la ruta en cada componente
import { styles } from '../styles/Style'

const Tab = createBottomTabNavigator();

export class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Home con Navigation BotomTabs</Text>
      </View>
    )
  }
}

export default Home