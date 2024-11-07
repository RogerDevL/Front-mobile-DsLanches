import React from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
export default function Editar() {
  return (
    <View style={style.container}>
    <Text style={style.label}>Nome:</Text>
    <TextInput 
    style={style.input} 
    placeholder="Digite o nome: " />

    <Text style={style.label}>Telefone: </Text>
    <TextInput 
    style={style.input} 
   
    placeholder="Digite seu telefone: "/>

 
    <Button title="Enviar contato"/>
</View>
  )
}

const style = StyleSheet.create({
    container:{
      padding: 20,
    },
    label:{
      fontSize: 18,
      marginBottom: 5,
    },
    input:{
      borderWidth:1,
      padding:10,
      marginBottom:20,
      borderRadius: 5
    },
  });
  


