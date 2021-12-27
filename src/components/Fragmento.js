import React from 'react'
import { View, Text } from 'react-native'

export default () => {
    return <>
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>
    </>

{/*
    <React.Fragment>
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>
    </React.Fragment>

    // ou importar o Fragment direto import React, {Fragment}
    <Fragment>
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>
    </Fragment>

    // Se eu usar React.Fragment, o fragmento aceita parâmetros (propriedades)
    <React.Fragment mensagem="Olá pessoal!">
        <Text>Texto 1</Text>
        <Text>Texto 2</Text>
        <Text>Texto 3</Text>
        <Text>Texto 4</Text>
    </React.Fragment>
*/}
}