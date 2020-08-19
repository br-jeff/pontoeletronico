import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import styles from './styles';
import PontoItem from '../../components/PontoItem';
import {RectButton} from 'react-native-gesture-handler';
import api from '../../Services/Eritram/api';
import {useNavigation} from '@react-navigation/native';

function ListaMarcacoes() {
const navigation = useNavigation();

  async function marcacaoPonto() {
    const idFunc = 1;
    const res = await api.put('marca/online/', {params: {idFunc}});
  }
  function telaQrCode() {
    navigation.navigate('QrCode');
  }

  return (
    <>
      <HeaderBack>
        <View style={styles.buttonContainer}>
          <View style={styles.alingButton}>
              
            <RectButton style={styles.btMarcaPonto}>
              <Text style={styles.atualizaPonto}> Atualizar </Text>
            </RectButton>

            <RectButton style={styles.btAtualizaMarca} onPress={telaQrCode}>
              <Text style={styles.marcarPonto}> Marcar Ponto</Text>
            </RectButton>
          </View>
        </View>
      </HeaderBack>


          <ScrollView style={styles.scroll}  
           contentContainerStyle={{
                paddingHorizontal:16,
                paddingBottom:10,
                marginBottom:300,
            }}>
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            <PontoItem />
            

          </ScrollView>
         

       
    </>
  );
}

export default ListaMarcacoes;
