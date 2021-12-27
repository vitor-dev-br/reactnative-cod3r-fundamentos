import React from "react"
import { View, StyleSheet } from 'react-native'

import ExercicioEstado from './src/components/ExercicioEstado'

export default () => (
  <View style={style.view}>
    <ExercicioEstado/> 
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