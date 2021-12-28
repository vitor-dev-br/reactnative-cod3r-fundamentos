import React from 'react'
import { View, Text } from 'react-native'
import Filho from './Filho'

export default props => {
    // Função para passar como referência para o filho
    function setNumeroPai(val) {
        console.warn(val)
    }
    return <>
        <View>
            {/* Enviando a funcao para o filho executar */}
            <Filho funcao={setNumeroPai} />
        </View>
    </>
}