import React from "react";
import { Text } from 'react-native';

export default props => {
    const {min, max} = props // Destructuring direto no componente
    const delta = max - min + 1 // Diferença entre min e max
    const aleatorio = parseInt(Math.random() * delta) + min // Math.random gera um valor entre 0 e 1, depois multiplica pelo delta e + o mínimo

    return <Text>O valor aleatório entre { min } e { max } é {aleatorio}.</Text>
}


// Destructuring direto no parâmetro do componente
export function dest2({min, max}) {
    const delta = max - min + 1
    const aleatorio = parseInt(Math.random() * delta) + min
    return <Text>O valor aleatório entre { min } e { max } é {aleatorio}.</Text>
}
