import React from 'react'
import { View, Text } from 'react-native'

export default props => {
    return <>
        <View>
            <Text>{props.a}</Text>
            <Text>{props.b}</Text>
        </View>
    </>
}