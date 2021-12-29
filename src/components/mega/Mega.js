import React, { Component, useState } from 'react'
import { Text, TextInput, Button } from 'react-native'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros,
        numeros: []
    }

    alterarQtdNumero = (qtd) => {
        this.setState({qtdNumeros: +qtd})
    }

    gerarNumeros = () => {
        this.setState({numeros: []})
        for(let i = 0; i < this.state.qtdNumeros; i++) {
            const delta = 55 - 1 + 1
            const aleatorio = parseInt(Math.random() * delta) + 1
            let num = this.state.numeros
            num.push(aleatorio)
            this.setState({numeros: num})
        }
    }

    render() {
        return (
            <>
                <Text style={{fontSize: 20}}>Gerador de números da MegaSena</Text>
                <Text style={{fontSize: 16}}>Selecione a quantidade de números para gerar</Text>
                <TextInput
                    keyboardType='numeric'
                    placeholder="Qtd de números"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={this.alterarQtdNumero}
                />
                <Button title="Gerar números" onPress={this.gerarNumeros} />
                {
                    this.state.numeros.map(item => {
                        return <Text>{item}</Text>
                    })
                }
            </>
        )
    }
}