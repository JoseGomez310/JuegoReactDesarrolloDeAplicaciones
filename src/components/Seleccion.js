import React from "react";
import { Button, View } from "react-native";

function Seleccion ({navigation}){
    return(
        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            <Button
                title="Jugar con repetidos"
                onPress={()=>{navigation.navigate('Juego',{Modo:"1"})}}
                Jugar con repetidos
            />
            <Button
                title="Jugar sin repetidos"
                onPress={()=>{navigation.navigate('Juego',{Modo:"2"})}}
                Jugar sin repetidos
            />
        </View>
    )

}

export default Seleccion;