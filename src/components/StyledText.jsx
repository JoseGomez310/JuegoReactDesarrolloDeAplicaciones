import React from "react"
import { StyleSheet, Text } from "react-native"

const styles=StyleSheet.create({
    text:{
        fontSize:12,
        color: 'grey'
    },
    bold:{
        fontWeight:'bold'
    },
    blue:{
        color:'blue'
    },
    big:{
        fontSize:20
    },
    small:{
        fontSize:10
    },
    textAlingCenter:{
        textAling:'center'
    }
})

export default function StyledText({textAlingCenter,blue,bold,big,small,children,...restOfProps}){
    const textStyles=[
        styles.text,
        textAlingCenter && styles.textAlingCenter,
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small
    ]
    return(
        <Text style={textStyles}>
            {children}
        </Text>
    )
}