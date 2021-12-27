import React from 'react'
import { Button } from 'react-native'

export default () => {

    function executar() {
        console.warn('Você clicou, muito bem!')
    }

    return <>

        {/* Se eu usar {executar}, a função vai ser referênciada */}
        <Button title="Clique aqui" onPress={executar}></Button>

        {/* Se eu usar {executar()}, a função vai ser executada */}
        <Button title="Clique aqui 2" onPress={executar}></Button>

        {/* Eu posso usar a função direta */}
        <Button title="Clique aqui 2" onPress={() => {
            console.warn('Função direta funciona!')
        }}></Button>

    </>

}