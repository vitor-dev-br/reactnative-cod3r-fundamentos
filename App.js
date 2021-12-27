import React from "react"
import { Text } from 'react-native'

/*
// OPÇÃO 1
// Deixando o componente como função anônima
const App = function () {
  return <Text>Mensagem exemplo!</Text>
}

export default App
*/

// OPÇÃO 2
// Deixando o componente como arrow funcion
export default () => {
  return <Text>Mensagem exemplo!</Text>
}