import React from 'react'
import { View, Text, FlatList } from 'react-native'
import produtos from './produtos'

export default props => {
    // Opção 1 (função fora do componente)
    const produtoRender = ({item: p}) => {
        return <Text>{p.id}) {p.nome} - R$ {p.price}</Text>
    }
    return <>
        <View>
            <Text>Lista produtos by FlatList</Text>
            <FlatList 
                data={produtos}
                keyExtractor={item => `${item.id}`}
                renderItem={produtoRender}
            />
        </View>
    </>
    /*
    // Opção 2 (renderizar a lista direto em renderItem)
    return <>
        <View>
            <Text>Lista produtos by FlatList</Text>
            <FlatList 
                data={produtos}
                keyExtractor={item => `${item.id}`}
                renderItem={({item: p}) => {
                    return <Text>{p.id}) {p.nome}</Text>
                }}
            />
        </View>
    </>
    */
}