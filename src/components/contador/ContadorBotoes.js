import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

export default props => {
    return <>
        <View style={styles.view}>
            {/* Executa o método de incremento do componente a cima */}
            <Button title="+" onPress={props.inc}/>
            <Button title="-" onPress={props.dec}/>
        </View>
    </>
}
const styles = StyleSheet.create({
    view: {
        backgroundColor: '#999999',
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center'
    }
})