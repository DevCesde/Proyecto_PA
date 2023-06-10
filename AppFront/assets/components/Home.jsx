import { Text, View } from 'react-native';
import { useState } from 'react';
import React, { Component } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

//AppContexProvider
import { AppContexProvider } from '../contex/AppContexProvider';
//estilos, pueden copiar la ruta en cada componente
import { styles } from '../styles/Style'
//useState global

//componentes
import RegistroLogin from './RegistroLogin';
import VehiculosDisponibles from './VehiculosDisponibles';
import RegistroVehiculo from './RegistroVehiculo';
import RegistroUsuario from './RegistroUsuario';
import Login from './Login';

const Tab = createBottomTabNavigator();

const Home = () => {

    const [registro, setRegistro] = useState(true);

    const onRegistroUsuarioStateChange = (newState) => {
        setRegistro(newState);
    }

    const isAdmin = registro;

    return (
        <AppContexProvider >
            <Tab.Navigator
                initialRouteName='RegistroVehiculo'
                screenOptions={{
                    tabBarActiveTintColor: 'green',
                    tabBarActiveBackgroundColor: 'yellow',
                    tabBarInactiveTintColor: 'black',
                    headerShown: false
                }
                }
            >

                <Tab.Screen name='RegistroLogin' component={() => (<RegistroLogin
                    registro={registro}
                    onRegistroUsuarioStateChange={onRegistroUsuarioStateChange}
                />)} options={{

                    title: 'Registro_Login', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='people' color={color} size={30} />
                    ),
                    tabBarVisible: false, // Ocultar la pestaña si no es administrador
                    headerShown: isAdmin, // Ocultar el encabezado si no es administrador
                }}
                />

                <Tab.Screen name='VehiculoDisponible' component={VehiculosDisponibles} options={{

                    title: 'Vehiculo_Disponible', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='car' color={color} size={30} />
                    ),
                    tabBarVisible: false, // Mostrar siempre la pestaña
                    headerShown: true, // Mostrar siempre el encabezado
                }}
                />
                <Tab.Screen name='RegistroUsuario' component={RegistroUsuario} options={{

                    title: 'Registro_Usuario', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='car' color={color} size={30} />
                    ),
                    tabBarVisible: false, // Mostrar siempre la pestaña
                    headerShown: false, // Mostrar siempre el encabezado
                }}
                />

                <Tab.Screen name='Login' component={Login} options={{

                    title: 'Registro_Login', tabBarIcon: ({ color, size }) => (
                        <Ionicons name='car' color={color} size={30} />
                    ),
                    tabBarVisible: false, // Mostrar siempre la pestaña
                    headerShown: false, // Mostrar siempre el encabezado
                }}
                />


                {
                    isAdmin && (
                        <Tab.Screen name='RegistroVehiculo' component={RegistroVehiculo} options={{

                            title: 'Devolución_Vehiculo', tabBarIcon: ({ color, size }) => (
                                <Ionicons name='car' color={color} size={30} />
                            ),
                            tabBarVisible: true, // Mostrar siempre la pestaña
                            headerShown: true, // Mostrar siempre el encabezado
                        }}

                        />
                    )
                }




            </Tab.Navigator>
        </AppContexProvider>
    )
}

export default Home;