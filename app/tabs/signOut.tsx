import { Text, View, Pressable } from "react-native"
import { GlobalStyles } from "../themes/GlobalStyles"
import { router } from "expo-router"

export default function WelcomeScreen(){

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.textHeader}>Desconectarse</Text>
            <Pressable 
                onPress={() => router.push('./index')} 
                style={GlobalStyles.buttons}>
                <Text style={GlobalStyles.tetxButtonLogin}>Sign out</Text>
            </Pressable>
        </View>
    )
}