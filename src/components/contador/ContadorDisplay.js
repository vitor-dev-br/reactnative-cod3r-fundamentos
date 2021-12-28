import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default props => {
    return <>
        <View style={styles.viewDisplay}>
            <Text style={styles.displayText}>{props.num}</Text>
        </View>
    </>
}
const styles = StyleSheet.create({
    viewDisplay: {
        backgroundColor: 'green',
        padding: 20,
        width: 200
    },
    displayText: {
        color: '#fff'
    }
})