import React from 'react'
import { View, Text, Platform } from 'react-native'

export default props => {
    if(Platform.OS === 'android') {
        return <>
        <View>
            <Text>Você está em um Android!</Text>
        </View>
    </>
    } else {
        return <>
        <View>
            <Text>Você está em um IOS!</Text>
        </View>
    </>
    }
    
}