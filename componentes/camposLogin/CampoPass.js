import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { styles } from './style';


export default function CampoPass({ password, setPassword }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="********"
        placeholderTextColor="#9ca3af"
        value={password}
        onChangeText={setPassword} // Actualiza el estado en App.js
        secureTextEntry={true} // Los asteriscos
        autoCapitalize="none"
      />
    </View>
  );
}