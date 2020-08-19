import React from 'react';
import {View, Text} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import QRCodeScanner from 'react-native-qrcode-scanner';
import styles from './styles';

function ListaMarcacoes() {
  return (
    <>
      <HeaderBack/>
      <View style={styles.container}>
        <View style={styles.qrContainer}> 
            <QRCodeScanner showMarker={true} 
            checkAndroid6Permissions={true}
            onRead={(e) => {alert(e.data)}}
            cameraStyle={styles.QrCode}  />
        </View>
      </View>
    </>
  );
}

export default ListaMarcacoes;
