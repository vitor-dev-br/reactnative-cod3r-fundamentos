import React from 'react'
import { View, Text } from 'react-native'
import Filho from './Filho'

export default props => {
    return <>
        <View>
            <Text>Membros da Família: </Text>
            {props.children}
            <Text>------------------</Text>
        </View>
    </>
}