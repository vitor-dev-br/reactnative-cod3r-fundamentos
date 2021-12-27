import React from "react"
import { View, StyleSheet } from 'react-native'

import Pai from './src/components/indiretaTeste/Pai'

export default () => (
  <View style={style.view}>
    <Pai/>
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