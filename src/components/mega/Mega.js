import React, { Component, useState } from 'react'
import { Text } from 'react-native'

export default class Mega extends Component {

    // Forma 1 de iniciar o estado
    state = {
        qtdNumeros: this.props.qtdNumeros
    }
    /*
    // Forma 2 de iniciar o estado
    constructor(props) {
        super(props)
        this.state = {
            qtdNumeros: props.qtdNumeros
        }
    }
    */

    render() {
        return (
            <Text>Componente by Classe {this.state.qtdNumeros}.</Text>
        )
    }
}