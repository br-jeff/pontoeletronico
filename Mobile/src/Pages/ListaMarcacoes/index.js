import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import HeaderBack from '../../components/HeaderBack'
import styles from './styles'
import PontoItem from '../../components/PontoItem'
import { RectButton } from 'react-native-gesture-handler'
import api from '../../Services/Eritram/api'


function ListaMarcacoes(){
    async function marcacaoPonto() {
        const idFunc = 1
        const res = await api.put("marca/online/",{params:{idFunc}})
      
    }
    
    

    return (
        <>
            <HeaderBack>
            <View style={styles.buttonContainer}>
                <View style={styles.alingButton}>
                    <RectButton style={styles.btMarcaPonto}>
                       <Text style={styles.atualizaPonto} > Atualizar </Text> 
                    </RectButton>

                    <RectButton style={styles.btAtualizaMarca} onPress={marcacaoPonto}>
                        <Text style={styles.marcarPonto}> Marcar Ponto</Text>
                    </RectButton>
                </View>
            </View>
            </HeaderBack>
           
            <View style={styles.container}>
             <PontoItem />
            </View>
            
        </>
         )
}

export default ListaMarcacoes