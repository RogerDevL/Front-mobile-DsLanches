import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
export default function Header() {
  return (
    
    <View style={estilos.topo}>
        <Text style={estilos.tituloHeader}>DS LANCHES</Text>
    </View>
  )
}

const estilos = StyleSheet.create({
    topo:{
      width:"100%",
      height:120,
      backgroundColor:"orange",
      flexDirection:"row"
    },
    tituloHeader:{
        width:"100%",
        textAlign:"center",
        color: "white",
        paddingTop:60,
        fontWeight:"bold",
        fontSize:20
    },
    
    
  })
  
