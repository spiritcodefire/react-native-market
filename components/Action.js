import React from 'react'
import { StyleSheet,  View, TouchableOpacity, Text } from 'react-native'

const Action = (props) => {
    const {container,price, priceContent ,preview , previewContent } = styles
    return (
        <View style={container}>
            <TouchableOpacity onPress={() => {console.log('price active');}} style={price}>
                <Text style={priceContent}>19.99</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {console.log('Preview active');}}  style={preview}>
                <Text style={previewContent}>Free Preview</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Action

const styles = StyleSheet.create({
    container: {
        flexDirection: "row" , 
        width: 251, 
        height: 48, 
        justifyContent: 'center', 
        alignItems: 'center', 
        marginTop: 27
   

    },
    price: {
        justifyContent: "center",
        alignItems: "center", 
        width: 150, 
        height: 48, 
        backgroundColor: 'white', 
        borderTopLeftRadius: 15, 
        borderBottomLeftRadius: 15, 
    }, 
    priceContent : {
         fontSize: 18, 
         fontWeight: "700", 
         lineHeight: 18 
    } , 
    preview: {
        justifyContent: "center",
        alignItems: "center", 
        width: 150, 
        height: 48, 
        backgroundColor: '#ef8262', 
        color: "white",
        borderTopRightRadius: 15, 
        borderBottomRightRadius: 15
    }, 
    previewContent: {
        color: "white",
        fontSize: 18, 
        fontWeight: "600", 
        lineHeight: 18
    }

})
