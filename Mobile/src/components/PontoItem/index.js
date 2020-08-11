import React from 'react'
import {View,Text} from 'react-native'
import styles from './styles'

function PontoItem() {
    return ( 
    <View style={styles.container}>
            <Text style={styles.nome} >   Nome </Text>

            <View style={styles.marcaDiaContainer} >
                <Text style={styles.marca}> 1  </Text>
                <Text style={styles.dia}> dia  </Text>
            </View>

            <Text style={styles.tipo}> Tipo: Online </Text>
            <Text style= {styles.hora}> hora  </Text>
            
           
    </View>
    )
}

export default PontoItem;