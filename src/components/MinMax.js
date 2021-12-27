import React from "react"
import { View, Text } from 'react-native'

export default function MinMax(props) {
    console.warn(props)
    return (<Text> O valor { props.max } é maior que { props.min }. </Text>)
}