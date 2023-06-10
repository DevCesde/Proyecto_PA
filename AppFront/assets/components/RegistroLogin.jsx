import { Text, View, Button } from 'react-native';
import React, { Component } from 'react';
//ruta de estilos
import { styles } from '../styles/Style';

const RegistroLogin = ({ registro, onRegistroUsuarioStateChange }) => {

  let handleStateChange = () => {
    const newState = true;
    onRegistroUsuarioStateChange(newState);
    console.log(newState);
  };
  let handleStatefalse = () => {
    const newState = false;
    onRegistroUsuarioStateChange(newState);
    console.log(newState);
  };

  //const estado = this.props.registroUsuarioState;

  return (
    <View style={styles.container}>
      <Text>Componente de login y registro</Text>
      <Text>Estado: {registro}</Text>
      <Button title="Admin" onPress={handleStateChange} />
      <br />
      <Button title="User" onPress={handleStatefalse} />
    </View>
  )

}

export default RegistroLogin;