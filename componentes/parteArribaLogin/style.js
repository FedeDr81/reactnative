const styles = StyleSheet.create({
  container: {
    flex: 1, // Esto es clave: le dice a la vista que ocupe el 100% de la pantalla disponible
    backgroundColor: '#ffffff', // Fondo blanco para el resto de la app
  },
  header: {
    backgroundColor: '#8b5cf6', // El color violeta
    paddingVertical: 20, // Espaciado interno arriba y abajo (como el padding-top y bottom)
    alignItems: 'center', // Centra el contenido (el texto) horizontalmente
    justifyContent: 'center', // Centra el contenido verticalmente
  },
  headerText: {
    color: '#ffffff', // Texto blanco
    fontSize: 18,
    fontWeight: 'bold',
  }
})
 
export default styles
