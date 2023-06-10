import { View, Text, Button } from 'react-native';
import React from 'react';
//estilos
import { styles } from '../styles/Style';
//hooks
import useRegistroVehiculos from '../hooks/useRegistroVehiculos';

const RegistroVehiculo = () => {
    //aqui se importaran los componentes
    const { admin, setAdmin } = useRegistroVehiculos();

    const presionarBoton = () => {
        console.log("presiona boton");
        setAdmin(!admin);
    };
    return (
        <View style={styles.container}>
            <Text>Componente Devolución Vehiculo</Text>
            {/* <Button title="Activar/Desactivar" onPress={presionarBoton} /> */}
        </View>
    )
}

export default RegistroVehiculo;