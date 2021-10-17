import React from 'react'
import { StyleSheet, View, Image } from 'react-native'


const Cover = ({image , small }) => {
    const {container, imageStyle , smallStyle} = styles
    const getContainerStyle = () => small ? smallStyle : container ;

    return (
        <View style={getContainerStyle()}>
            <Image  style={imageStyle} source={image} />
        </View>
    )
}

export default Cover

const styles = StyleSheet.create({
    container: {
        width: 162, 
        height: 243, 
        // borderColor: "white", 
        // borderWidth: 1
    }, 
    imageStyle: {
        width: "100%", 
        height: "100%", 
        borderRadius: 10,
    }, 
    smallStyle : {
        width: 70, 
        height: 112, 
        marginTop : 20, 
        marginHorizontal: 5
    }
})
