import React from "react"
import { View, StyleSheet } from 'react-native'

import ListaProdutos from './src/components/produtos/ListaProdutosV2'

export default () => (
  <View style={style.view}>
    <ListaProdutos/>
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