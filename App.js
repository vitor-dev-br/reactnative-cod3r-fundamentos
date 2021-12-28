import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import Mega from "./src/components/mega/Mega"

export default () => (
  <View style={style.view}>
    <Mega />
  </View>
)

const style = StyleSheet.create({
  view: {
    flex: 1,
    marginTop: 40
  }
})