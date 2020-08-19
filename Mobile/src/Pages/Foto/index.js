import React from 'react';
import {View, Text} from 'react-native';
import HeaderBack from '../../components/HeaderBack'
import styles from './styles';



function Foto() {


  return (
    <>
      <HeaderBack/>
      <View style={styles.container}>
        <View style={styles.qrContainer}> 
          <Text> foto aqui</Text>
        </View>
      </View>
    </>
  );
}

export default Foto;
