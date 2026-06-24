import React from 'react';
import { View, Image } from 'react-native';
import { styles } from './style'; // Importamos tus estilos locales

export default function ImagenLogin() {
  return (
    <View style={styles.imageContainer}>
      <Image 
        source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/2560px-Coca-Cola_logo.svg.png' }} 
        style={styles.logo}
        resizeMode="contain" 
      />
    </View>
  );
}