import React from "react";
import { Text } from 'react-native';

// PROPRIEDADES É SOMENTE LEITURA

export default (props) => {
    // Não é possível alterar a propriedade diretamente
    props.min += 300
    props.max += 300
    // return <Text>O valor aleatório entre { props.min } e { props.max } é XXX.</Text>

    // CORRETO É  USAR OUTRA VARIÁVEL E FAZER A OPERAÇÃO (ARITIMÉTICA NESSE EXEMPLO)
    let minA = props.min + 1300
    let maxA = props.max + 1300
    return <Text>O valor aleatório entre { minA } e { maxA } é XXX.</Text>
}

/*

export default ({min, max}) => {
    // É possível alterar a propriedade na hora da renderização com restructuring
    min += 300
    max += 300
    return <Text>O valor aleatório entre { min } e { max } é XXX.</Text>
}
*/