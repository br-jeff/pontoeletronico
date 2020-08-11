import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import styles from './styles'
import PontoItem from '../../components/PontoItem'


function ListaMarcacoes(){
    return (
        <>
            <HeaderBack/>
            <View style={styles.container}>
                    <PontoItem/>
                 
                   
                <Text> Lista MArca </Text>
            </View>
        </>
         )
}

export default ListaMarcacoes