import { Text, View, Button } from 'react-native';
import React, { Component } from 'react';
//ruta de estilos
import { styles } from '../styles/Style';

const RegistroLogin = ({ registro, onIdentificaRol }) => {

  let onAdmin = () => {
    const rol = true;
    onIdentificaRol(rol);
    console.log(rol);
  };
  let onUser = () => {
    const rol = false;
    onIdentificaRol(rol);
    console.log(rol);
  };

  //const estado = this.props.registroUsuarioState;

  return (
    <View style={styles.container}>
      <Text>Componente de login y registro</Text>
      <Text>Estado: {registro}</Text>
      <Button title="Admin" onPress={onAdmin} />
      <br />
      <Button title="User" onPress={onUser} />
    </View>
  )

}

export default RegistroLogin;