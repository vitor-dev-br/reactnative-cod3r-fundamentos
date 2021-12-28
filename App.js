import React from "react"
import { View, StyleSheet } from 'react-native'

import Plataforma from './src/components/Plataforma'

export default () => (
  <View style={style.view}>
    <Plataforma/>
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