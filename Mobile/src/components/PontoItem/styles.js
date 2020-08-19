import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        marginTop: -55,
        height: 110,
        width: '100%', 
        backgroundColor: '#fff' ,
        elevation: 1,
        borderRadius: 8,
       
    },
    circle:{
        width:30,
        height: 30,
        borderRadius: 15,
        backgroundColor: '#1060dd',
        alignItems: 'center',
        justifyContent: 'center',
    },
    numMarca:{
        color: '#fff',
        fontSize: 18
    },
    containerCircle:{
        flexDirection: 'row',
        justifyContent: "flex-start",
        paddingTop: 8,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 8 ,
    },
    nome:{
        fontSize: 18,
        color:'#1060dd',
        fontWeight: "bold",

    },
    onlineESinc:{
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end",
        padding: 8,
        marginTop: 10,
    },
    tipo:{
        color: '#1060dd'
    },
    marca:{
     
    },
    hora:{
     
    },
    dia:{

    },
    marcaDiaContainer:{
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "center",
    },
    sincronizada: {
        color: '#666'
    }
   
   
})

export default styles