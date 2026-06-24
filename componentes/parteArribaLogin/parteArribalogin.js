import { StatusBar, SafeAreaView} from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styles from './style';


export default function ParteArribaLogin(){

    return(
        <View>
            <StatusBar backgroundColor="#8b5cf6" barStyle="light-content" />
                <View>
                    <Text style = {styles.headerText}> LOGIN APP </Text>
                </View>
        </View>
    )

}