import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: '#fafafa',
        padding: 9,
    },
    btMarcaPonto: {
        width: '47%',
        height: 60,
        backgroundColor: '#0276FD',
        borderRadius: 8,
        justifyContent: "center"
    },
    btAtualizaMarca: {
        width: '47%',
        height: 60,
        backgroundColor: '#0276FD',
        borderRadius: 8,
        justifyContent: "center"
    },
    alingButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around', 
    },
    buttonContainer:{
        flex:1,
        justifyContent: 'center', 
        padding: 9,
        paddingBottom:25,
    },
    marcarPonto:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
    },
    atualizaPonto:{
        color: '#fff',
        fontSize: 18,
        textAlign: 'center',
        justifyContent: 'center',
    },


   
})

export default styles