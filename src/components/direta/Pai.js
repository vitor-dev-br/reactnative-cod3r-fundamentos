import React from 'react'
import { View, Text } from 'react-native'

import Filho from './Filho'

export default props => {

    let x = 13
    let y = 90

    return <>
        <View>
            <Filho a={x} b={y} />
            <Filho a={x * 2} b={y * 2} />
        </View>
    </>
}