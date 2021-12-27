import React from "react"
import { View, StyleSheet } from 'react-native'

import Botao from './src/components/Botao'

export default () => (
  <View style={style.view}>
    <Botao /> 
  </View>
)

const style = new StyleSheet.create({
  view: {
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    paddingTop: 50
  }
})