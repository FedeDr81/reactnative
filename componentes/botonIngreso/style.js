import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  boton: {
    backgroundColor: '#8b5cf6', // El mismo violeta del Header
    paddingVertical: 15, // Altura del botón
    borderRadius: 8, // Bordes redondeados
    alignItems: 'center', // Centra el texto "INGRESAR" horizontalmente
    marginTop: 10,
    marginHorizontal: 25, // Margen a los costados para que quede alineado con los inputs
  },
  textoBoton: {
    color: '#ffffff', // Letra blanca
    fontSize: 16,
    fontWeight: 'bold',
  }
});