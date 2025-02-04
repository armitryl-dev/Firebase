import { View, Text } from "react-native"
import { GlobalStyles } from "../themes/GlobalStyles"

export default function Data(){

    return (
        <View style={GlobalStyles.container}>
            <Text style={GlobalStyles.textHeader}>Datos de la base de datos</Text>
        </View>
    )
}