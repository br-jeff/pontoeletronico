import React from 'react'
import {View, Text} from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import styles from './styles'


function ListaMarcacoes(){
    return (
        <View style={styles.container}>
            <HeaderBack/>
            <Text> Lista MArca </Text>
        </View>
         )
}

export default ListaMarcacoes