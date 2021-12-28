import React from "react"
import { View, StyleSheet } from 'react-native'

import Condicional from './src/components/Condicional'

export default () => (
  <View style={style.view}>
    <Condicional/>
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