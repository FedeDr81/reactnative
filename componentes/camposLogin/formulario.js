import React from 'react';
import { View, StyleSheet } from 'react-native';
// Importás tus componentes individuales (asegurate de que la ruta sea correcta)
import CampoEmail from './campoEmail.js';
import CampoPass from './CampoPass.js';
import { styles } from './style.js';

export default function Formulario({ email, setEmail, password, setPassword }) {
  return (
    <View style={styles.container}>
      
      {/* Le pasamos solo lo que necesita el email */}
      <CampoEmail 
        email={email} 
        setEmail={setEmail} 
      />

      {/* Le pasamos solo lo que necesita la contraseña */}
      <CampoPass 
        password={password} 
        setPassword={setPassword} 
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25,
    marginTop: 10,
  }
});