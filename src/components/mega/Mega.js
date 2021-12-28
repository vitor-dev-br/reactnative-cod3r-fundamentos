import React, { Component } from 'react'
import { Text } from 'react-native'

export default class Mega extends Component {

    render() {
        return (
            <Text>Componente by Classe {this.props.nome}.</Text>
        )
    }
}