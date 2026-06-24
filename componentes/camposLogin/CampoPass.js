import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import { styles } from './style';

export default function CampoPass() {

    const [password, setPassword] = useState('');

    return(
        <View style={styles.inputContainer}>
            <TextInput
            style={styles.input}
            placeholder="Contraseña"
            placeholderTextColor="#9ca3af"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={true} // Oculta los caracteres con puntitos nativos
            autoCapitalize="none"
            />
        </View>
    )
}