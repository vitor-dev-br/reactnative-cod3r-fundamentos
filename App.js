import React from "react"
import { Text, View } from 'react-native'

import Primeiro from './src/components/Primeiro'

export default () => (
  <View>
    <Primeiro />
    { /* O quê está entre {} é interpretado como JS */}
    <Text>{ 1 + 2 }</Text>
  </View>
)
