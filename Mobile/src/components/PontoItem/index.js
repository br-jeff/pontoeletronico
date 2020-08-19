import React from 'react';
import {View, Text} from 'react-native';
import styles from './styles';


function PontoItem() {
    return ( 
        <View style={styles.container}>
            <View style={styles.containerCircle}> 
            <View style={styles.circle}>
                    <Text style={styles.numMarca}> 1 </Text>
                </View>

             <Text style={styles.nome} >   Jefferson Ferreira Da Silva </Text>

             
            </View>
            
            <View style={styles.marcaDiaContainer} >
                <Text style={styles.dia}> Dia: 18/08/2020  </Text>
                <Text style={styles.hora}>Hora: 19:00 </Text>
            </View>
            <View style ={styles.onlineESinc}> 
                <Text style={styles.sincronizada}>Náo Sincronizada</Text>
              <Text style={styles.tipo}>Online</Text>
            </View>
            

     </View>
    )
}

export default PontoItem;