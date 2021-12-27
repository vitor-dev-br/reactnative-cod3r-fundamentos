import React from "react"
import { View, Text } from 'react-native'

// No import, eu posso declarar qualquer nome para a variável (ex: import BlaBlaBla from './src/components/Multi')
export default function Comp() {
    return <Text>Comp Oficial</Text>
}

// No import, eu preciso usar o mesmo nome na var (ex: import Comp1 from './src/components/Multi')
export function Comp1() {
    return <Text>Comp 01</Text>
}


// No import, eu preciso declarar o nome da variável declarada como Comp2 (igual eu exportei)
export function Comp2() {
    return <Text>Comp 02</Text>
}
