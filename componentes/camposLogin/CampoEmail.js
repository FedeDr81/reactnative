import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './style';

export default function CampoEmail() {

    const [email, setEmail] = useState('');

    return(
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="simon@galaxies.dev"
          placeholderTextColor="#9ca3af" // Color gris para el texto de ayuda
          value={email}
          onChangeText={setEmail} 
          keyboardType="email-address" // Optimiza el teclado del celu para emails
          autoCapitalize="none" // Evita que la primera letra se ponga en mayúscula sola
        />
      </View>
    )
}