import React from "react"
import { View, StyleSheet } from 'react-native'

import Fragmento from './src/components/Fragmento'

export default () => (
  <View style={style.view}>
    <Fragmento /> 
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