import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { styles } from './style';
export default function CampoEmail({ email, setEmail }) {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="simon@galaxies.dev"
        placeholderTextColor="#9ca3af"
        value={email}
        onChangeText={setEmail} // Actualiza el estado en App.js
        keyboardType="email-address"
        autoCapitalize="none"
      />
    </View>
  );
}