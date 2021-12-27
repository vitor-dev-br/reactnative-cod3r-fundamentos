import React from "react"
import { Text, View, StyleSheet } from 'react-native'

import estilo from './src/components/estilo'

import Style from './src/components/Style'

export default () => (
  <View>
    <Style />
    <Text style={estilo.padrao}>Esse é um texto vindo de um estilo externo</Text>
  </View>
)
