import { Text, View } from 'react-native';
import React, { Component } from 'react';
//ruta de estilos
import { styles } from '../styles/Style';

export class RegistroUsuario extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Componente de login y registro</Text>
      </View>
    )
  }
}

export default RegistroUsuario;