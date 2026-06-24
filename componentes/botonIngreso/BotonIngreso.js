import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './style';

export default function BotonIngreso({ onPress }) {
  return (
    <TouchableOpacity 
      style={styles.boton} 
      onPress={onPress} // Ejecuta la función que le pasemos desde App.js
      activeOpacity={0.7} // Controla qué tan transparente se pone al tocarlo (1 es nada, 0 es invisible)
    >
      <Text style={styles.textoBoton}>INGRESAR</Text>
    </TouchableOpacity>
  );
}