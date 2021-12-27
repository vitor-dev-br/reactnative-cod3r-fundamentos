import React from 'react'
import { View, Text } from 'react-native'

export default () => {
    // Semelhante ao console.warn('conteudo') do navegador
    const msg = "Mensagem by const"
    console.warn(msg)
    return (
        <Text>Texto do componente!</Text>
    )
}