import React from 'react'
import { View, Text, Button } from 'react-native'

export default props => {

    function gerarNumero(min, max) {
        const fator = max - min + 1
        // Vou retornar para o pai o valor para ser resgatado na função pai da referência
        return parseInt(Math.random() * fator) + min
    }

    return <>
        <View>
            <Button title="Enviar" onPress={function() {
                const n = gerarNumero(props.min, props.max)
                props.funcao(n)
            }} />
        </View>
    </>
}