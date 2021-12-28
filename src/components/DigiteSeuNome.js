import React, { useState } from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'

export default props => {
    // Componente controlado: Só altera o valor do campo através de uma execução de uma função para alterar o estado
    // Teoria: Não é possível alterar o estado do front do aplicativo direto no estado (state) a não ser pelo onChangeText
    //que executa a função que faz o setState (setNome nesse exemplo)
    // Obs: Para transformar como Não controlado, eu posso passar um valor null em Value (value={null})
    // Fluxo: Gero um evento no input, o evento dispara uma função e através da função é alterado o evento
    const [nome, setNome] = useState('Teste')
    return <>
        <View style={styles.view}>
            <Text>Bem-vindo(a): {nome}</Text>
            <Text>Digite o seu nome:</Text>
            <TextInput 
                style={styles.input}
                placeholder='Digite seu nome'
                value={nome}
                onChangeText={nome => setNome(nome)}
            />
        </View>
    </>
}
const styles = StyleSheet.create({
    view: {
        width: 300
    },
    input: {
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 5,
        padding: 10
    }
})