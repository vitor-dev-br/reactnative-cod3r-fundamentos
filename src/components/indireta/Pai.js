import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Filho from './Filho'

export default props => {

    // TEORIA: Passo do Pai para o Filho uma função, o filho dá return em um dado
    // e eu nesse caso estou usando o state para exibir na tela uma atualização

    // Criando o state para conseguir atualizar na tela
    const [num, setNum] = useState(0)

    // Declarando a função para enviar para o filho (posso usar quantos parâmetros eu quiser)
    function exibirValor(numero) {
        setNum(numero)
    }
    return <>
        <View>
            <Text>{num}</Text>
            <Filho min={20} max={90} funcao={exibirValor} />
        </View>
    </>
}