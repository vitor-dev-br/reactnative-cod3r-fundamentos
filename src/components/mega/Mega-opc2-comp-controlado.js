import React, { Component, useState } from 'react'
import { Text, TextInput } from 'react-native'

export default class Mega extends Component {

    state = {
        qtdNumeros: this.props.qtdNumeros
    }

    alterarQtdNumero(qtd) {
        this.setState({qtdNumeros: qtd})
    }

    render() {
        return (
            <>
                <Text>Componente by Classe {this.state.qtdNumeros}.</Text>
                <TextInput
                    keyboardType='numeric'
                    placeholder="Qtd de números"
                    value={`${this.state.qtdNumeros}`}
                    onChangeText={qtd => this.alterarQtdNumero(qtd)}
                />
            </>
        )
    }
}