import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 25, // Margen interno a los costados para que no toque los bordes de la pantalla
    marginTop: 10,
  },
  inputContainer: {
    marginBottom: 20, // Espacio entre el input de email y el de contraseña
  },
  input: {
    height: 50,
    backgroundColor: '#f9fafb', // Un gris muy clarito de fondo
    borderColor: '#e5e7eb', // Borde gris claro
    borderWidth: 1,
    borderRadius: 8, // Bordes redondeados
    paddingHorizontal: 15, // Espacio interno para que el texto no pegue contra el borde izquierdo
    fontSize: 16,
    color: '#1f2937',
  },
});