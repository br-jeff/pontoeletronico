import React from 'react';
import {View, Text} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import QRCodeScanner from "react-native-qrcode-scanner";
import styles from './styles';


function ListaMarcacoes() {
  return (
    <View style={styles.container}>
     
        <QRCodeScanner
        showMarker={true}
        checkAndroid6Permissions={true}
        />
    
    </View>
    
  );
}

export default ListaMarcacoes;
