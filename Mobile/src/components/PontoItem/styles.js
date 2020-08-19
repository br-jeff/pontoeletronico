import {StyleSheet} from 'react-native'


const styles = StyleSheet.create({
    container: {
        height:95,
        width: '100%', 
        backgroundColor: '#fff' ,
        elevation: 1,
        borderRadius: 8,
        marginBottom: 10,
       
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
       marginLeft: 50,
    },
    sincronizada: {
        color: '#666'
    }
   
   
})

export default styles