import React from "react"
import { View, StyleSheet } from 'react-native'

import MinMax from './src/components/MinMax'

export default () => (
  <View style={style.view}>
    {/* Com {val} é passado como o tipo padrão dele no JS */}
    <MinMax min={10} max={30} /> 
    {/* Com "val" é passado como String */}
    <MinMax min="120" max="430" /> 
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