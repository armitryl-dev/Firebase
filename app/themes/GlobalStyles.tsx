import { StyleSheet } from "react-native"
import { Color } from "./Color"

export const GlobalStyles = StyleSheet.create({
    
    container:{
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textLogin:{
        fontSize: 30,
        fontWeight: "bold"
    },
    textInputContainer:{
        backgroundColor: Color.orangeClarito,
        margin: "2%",
        borderRadius: 20,
        width: "50%"
    },
    textUserPassword:{
        marginLeft: "5%"
    },
    buttons:{
        backgroundColor: Color.blue,
        borderRadius: 10,
        padding: "3%",
        margin: "2%"
    },
    tetxButtonLogin:{
        color: 'white', 
        textAlign: 'center'
    },
    textHeader:{
        fontSize: 25,
        fontWeight: "bold"
    }
})