import { Text, View } from 'react-native';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
//estilos, pueden copiar la ruta en cada componente
import { styles } from '../styles/Style'
//componentes
import RegistroUsuario from './RegistroUsuario';
import VehiculosDisponibles from './VehiculosDisponibles';

const Tab = createBottomTabNavigator();

export class Home extends Component {
  render() {
    return (
        <Tab.Navigator
        initialRouteName='RegistroUsuario'
        screenOptions={{
            tabBarActiveTintColor: 'green',
            tabBarActiveBackgroundColor: 'yellow',
            tabBarInactiveTintColor: 'black',
            headerShown: false
        }
        }
    >
        <Tab.Screen name='RegistroUsuario' component={RegistroUsuario} options={{

            title: 'Registro_Usuario', tabBarIcon: ({ color, size }) => (
                <Ionicons name='people' color={color} size={30} />
            )
        }}
        />

        <Tab.Screen name='VehiculoDisponible' component={VehiculosDisponibles} options={{

            title: 'Vehiculo_Disponible', tabBarIcon: ({ color, size }) => (
                <Ionicons name='car' color={color} size={30} />
            )
        }}
        />

       

    </Tab.Navigator>
    )
  }
}

export default Home;