import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

export default () => (
    <View style={style.view}>
        <Text style={style.titulo}>Meu Título</Text>
        <Text style={style.texto}>Meu conteúdo...</Text>
    </View>
)

const style = new StyleSheet.create({
    view: {
        backgroundColor: 'red',
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titulo: {
        fontSize: 46
    },
    texto: {
        fontSize: 30
    }
})