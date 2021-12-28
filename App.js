import React from "react"
import { View, StyleSheet } from 'react-native'

import Contador from './src/components/contador/Contador'

export default () => (
  <View style={style.view}>
    <Contador/>
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