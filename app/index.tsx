import { TextInput, View, Text, Pressable, Button } from "react-native"
import { GlobalStyles } from './themes/GlobalStyles';
import { router } from "expo-router";
import { Color } from "./themes/Color";

export default function HomeScreen(){

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.textLogin}>Inicio de sesión</Text>
            <View style={GlobalStyles.textInputContainer}>
                <TextInput placeholder="Usuario" style={GlobalStyles.textUserPassword}></TextInput>
            </View>
            <View style={GlobalStyles.textInputContainer}>
                <TextInput placeholder="Contraseña" style={GlobalStyles.textUserPassword}></TextInput>
            </View>
            <Pressable 
                onPress={() => router.push('./tabs/signOut')} 
                style={GlobalStyles.buttons}>
                <Text style={GlobalStyles.tetxButtonLogin}>Iniciar sesión</Text>
            </Pressable>
            <Pressable 
                onPress={() => router.push('./tabs/data')} 
                style={GlobalStyles.buttons}>
                <Text style={GlobalStyles.tetxButtonLogin}>Registrarse</Text>
            </Pressable>
        </View>
    )
        

}