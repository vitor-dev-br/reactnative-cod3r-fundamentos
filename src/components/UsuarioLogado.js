import React from 'react'
import { View, Text } from 'react-native'
import If from './if'

export default ({usuario = {}}) => {
    return <>
        <View>
            <If teste={usuario && Object.keys(usuario).length !== 0 && usuario.email && usuario.nome}>
                <Text>Usuário logado: </Text>
                <Text>{usuario.nome} - {usuario.email}</Text>
            </If>
        </View>
    </>
}