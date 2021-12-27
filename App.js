import React from "react"
import { View, StyleSheet } from 'react-native'

import Propriedades from './src/components/Propriedades'

export default () => (
  <View style={style.view}>
    {/* Com {val} é passado como o tipo padrão dele no JS */}
    <Propriedades min={10} max={30} /> 
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