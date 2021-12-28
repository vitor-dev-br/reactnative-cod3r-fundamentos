import React from 'react'
import { View, Text } from 'react-native'
import { Button } from 'react-native'

export default props => {
    return <>
        <View>
            <Button onPress={
                    function () {
                        // Executando a função
                        props.funcao(9999)
                    }
                }
                title="Click aqui" />
        </View>
    </>
}