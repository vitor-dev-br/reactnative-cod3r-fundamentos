import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ContadorDisplay from './ContadorDisplay'
import ContadorBotoes from './ContadorBotoes'

export default props => {

    const [num, setNum] = useState(0)

    const inc = () => setNum(num + 1)
    const dec = () => setNum(num - 1)

    return <>
        <View>
            <Text style={styles.view}>Contador</Text>
            <ContadorDisplay num={num} />
            <ContadorBotoes inc={inc} dec={dec}/>
        </View>
    </>
}

const styles = StyleSheet.create({
    view: {
        backgroundColor: '#999999',
        padding: 20
    }
})