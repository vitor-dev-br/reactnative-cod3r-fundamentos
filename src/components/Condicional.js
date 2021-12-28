import React from 'react'
import { View, Text } from 'react-native'

export default props => {
    const idade = 19
    // Para não renderizar nada na confição falsa, eu posso retornar 'false' (sem aspas)
    return <>
        <Text>{ idade >= 18 ? 
        <View><Text>Maior de idade</Text></View> :
        <View><Text>Menor de idade</Text></View>
        }</Text>
    </>
    
}