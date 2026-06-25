import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
// 2. Alert y SafeAreaView se importan de react-native
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';

import ParteArribaLogin from './componentes/parteArribaLogin/parteArribalogin.js';
// 3. Corregida la "F" mayúscula del archivo Formulario
import Formulario from './componentes/camposLogin/formulario.js';
import ImagenLogin from './componentes/imagenLogin/imagenLogin.js';
// 4. Corregida la "b" minúscula de la carpeta botonIngreso
import BotonIngreso from './componentes/botonIngreso/BotonIngreso.js';

export default function App() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const manejarLogin = () => {
    const emailValido = 'fede@ejemplo.com';
    const claveValida = '123456';

    if (email.trim() === emailValido && password === claveValida) {
      Alert.alert('Éxito', '¡Ingresaste correctamente!');
    } else {
      Alert.alert('Error', 'Usuario o contraseña incorrectos, vuelva a intentar.');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ParteArribaLogin/>
      <ImagenLogin/>
      <Formulario 
        email={email} 
        setEmail={setEmail} 
        password={password} 
        setPassword={setPassword} 
      />
      <BotonIngreso 
        onPress={manejarLogin()} 
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
