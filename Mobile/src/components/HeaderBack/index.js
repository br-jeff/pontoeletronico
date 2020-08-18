import React,{ ReactNode } from 'react'
import {View,Text} from 'react-native'
import styles from './styles'

interface headerBackProps{
    headerButton?: ReactNode
}

const HeaderBack:React.FC = ({children,headerButton}) => {
    return (
    <View style={styles.container}>
       {children}
    </View>
    )
};
export default HeaderBack