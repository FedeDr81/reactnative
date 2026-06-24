import { StatusBar, SafeAreaView} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ParteArribaLogin from './componentes/parteArribaLogin/parteArribalogin';
import CampoEmail from './componentes/camposLogin/campoEmail';
import CampoPass from './componentes/camposLogin/CampoPass';
import styles from './styles/styles';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ParteArribaLogin/>
      <Logo />
      <CampoEmail/>
      <CampoPass/>
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
