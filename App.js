import React from "react"
import { Text, View } from 'react-native'

import Primeiro from './src/components/Primeiro'
import X, { Comp1 } from "./src/components/Multi" // com {} eu vou ler o quê foi exportado do arquivo

export default () => (
  <View>
    <Primeiro />
    <Comp1></Comp1>
    <X />
  </View>
)
