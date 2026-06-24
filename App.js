import { StatusBar, SafeAreaView} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ParteArribaLogin from './componentes/parteArribaLogin/parteArribalogin';
import CampoEmail from './componentes/camposLogin/campoEmail';
import CampoPass from './componentes/camposLogin/CampoPass';
import styles from './styles/styles';

export default function App() {

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
      <Logo />
      <CampoEmail/>
      <CampoPass/>
      <BotonIngreso 
        onPress={() => alert('¡Hiciste click en Ingresar!')} 
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
