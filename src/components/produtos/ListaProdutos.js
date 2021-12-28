import React from 'react'
import { View, Text } from 'react-native'
import produtos from './produtos'

export default props => {
    // Opção 2: Função e renderizar a função direto o JSX
    function obterLista() {
        return produtos.map(item => {
            return <Text key={item.id}>{item.id}) {item.nome} - R$ {item.price}</Text>
        })
    }
    return <>
        <View>
            <Text>Lista de produtos:</Text>
            {produtos.map(item => <Text key={item.id}>{item.id}) {item.nome} - R$ {item.price}</Text>)}
            <Text>Lista alternativa de produtos:</Text>
            {obterLista()}
        </View>
    </>
}