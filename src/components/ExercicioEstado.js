import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

export default props => {

    const [inicio, setInicio] = useState(0)
    const adicionarInicio = function () {
        setInicio(inicio + 100)
    }

    return <>
        <View>
            <Text>{ inicio }</Text>
            <Button title='Adicionar 100' onPress={adicionarInicio}/>
        </View>
    </>
}