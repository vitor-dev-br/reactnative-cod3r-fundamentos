import React from "react"
import { View, StyleSheet } from 'react-native'

import Pai from './src/components/Children/Pai'
import Filho from './src/components/Children/Filho'

export default () => (
  <View style={style.view}>
    <Pai>
      <Filho nome="Vitor" sobrenome="Adonai" />
      <Filho nome="Marcela" sobrenome="Adonai" />
      <Filho nome="Thiago" sobrenome="Adonai" />
      <Filho nome="Aline" sobrenome="Adonai" />
    </Pai>
    <Pai>
      <Filho nome="Pedro" sobrenome="Souza" />
    </Pai>
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