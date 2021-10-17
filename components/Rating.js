import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { prefix } from "../utils/constant" ;

const Rating = (props) => {
    const { container, star, rate, votes} = styles
    return (
        <View style={container}>
            <Ionicons style={star} name={`${prefix}-star`} />
            <Text style={rate}>4.8</Text>
            <Text style={votes}>(2578)</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row', 
        justifyContent: "space-between", 
        width: 148, 
        paddingHorizontal: 27, 
        alignItems: "center",  
        marginTop: 20
    }, 
    star :  {
       color: "#ffdd4f" 
    }, 
    rate : {
        color: "white", 
        fontSize: 16, 
        fontWeight: "500", 
        lineHeight: 16
    }, 
    votes : {
        color: "white", 
        opacity: 0.5, 
        fontSize: 14, 
        fontWeight: "400", 
        lineHeight: 14

    }
})

export default Rating


