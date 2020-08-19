import React from 'react';
import {View, Text} from 'react-native';
import HeaderBack from '../../components/HeaderBack';
import QRCodeScanner from 'react-native-qrcode-scanner';
import {useNavigation} from '@react-navigation/native';
import styles from './styles';

function QrCode() {
    const navigation = useNavigation()

  return (
    <>
      <HeaderBack/>
      <View style={styles.container}>
        <View style={styles.qrContainer}> 
            <QRCodeScanner showMarker={true} 
            checkAndroid6Permissions={true}
            onRead={(e) => {navigation.navigate('Foto')}}
            cameraStyle={styles.QrCode}  />
        </View>
      </View>
    </>
  );
}

export default QrCode;
