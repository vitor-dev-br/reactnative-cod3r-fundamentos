import React from "react"
import { View, StyleSheet } from 'react-native'

import UsuarioLogado from './src/components/UsuarioLogado'

export default () => (
  <View style={style.view}>
    <UsuarioLogado usuario={ {nome: 'Vitor', email: 'vitor@vitor.dev.br'} } />
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