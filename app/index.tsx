import { TextInput, View, Text, Pressable, Alert } from "react-native"
import { GlobalStyles } from './themes/GlobalStyles';
import { router } from "expo-router";
import { Color } from "./themes/Color";
import { useState } from "react";
import { signInWithEmailAndPassword } from "@firebase/auth";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { auth } from '../Firebaseconfig';

export default function HomeScreen(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const login = async () => {
        try {
            const user = await (signInWithEmailAndPassword(auth, email, password));
            Alert.alert("Inicio de sesión correcto.")
            if (user) router.replace('/tabs/signOut')
        } catch (error:any){
            console.log(error);
            Alert.alert("Inicio de sesión incorrecto", "error.message")
        }
    }

    const register = async () => {
        try {
            const user = await (createUserWithEmailAndPassword(auth, email, password));
            Alert.alert("Registro correcto.")
            if (user) router.replace('/tabs/data')
        } catch (error:any){
            console.log(error);
            Alert.alert("Error al registrar el usuario", "error.message")
        }
    }

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.textLogin}>Inicio de sesión</Text>
            <View style={GlobalStyles.textInputContainer}>
                <TextInput placeholder="Usuario" style={GlobalStyles.textUserPassword} value={email} onChangeText={setEmail}></TextInput>
            </View>
            <View style={GlobalStyles.textInputContainer}>
                <TextInput secureTextEntry placeholder="Contraseña" style={GlobalStyles.textUserPassword} value={password} onChangeText={setPassword}></TextInput>
            </View>
            <Pressable 
                onPress={login}
                style={GlobalStyles.buttons}>
                <Text style={GlobalStyles.tetxButtonLogin}>Iniciar sesión</Text>
            </Pressable>
            <Pressable 
                onPress={register} 
                style={GlobalStyles.buttons}>
                <Text style={GlobalStyles.tetxButtonLogin}>Registrarse</Text>
            </Pressable>
        </View>
    )
        

}