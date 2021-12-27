import React, { useState } from "react"
import { Text, Button, StyleSheet } from 'react-native'

export default ({inicial = 0, passo = 1}) => {

    // Não é possígel gerar impacto na interface gráfica sem ser via state
    // Eu consigo alterar por trás da interface vars, mas ela não muda na interface
    
    const [numero, setNumero] = useState(inicial)

    const inc = () => {
        setNumero(numero + passo)
        // console.warn(numero)
        // numero++
    }
    const dec = () => setNumero(numero - passo)

    return <>
        <Text>{numero}</Text>
        <Button title="+" onPress={inc} style={{ marginTop: 20}}/>
        <Button title="-" onPress={dec} style={{ marginTop: 20}}/>
    </>
}