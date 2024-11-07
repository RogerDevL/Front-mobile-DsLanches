import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Button, ScrollView, Alert } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios';

export default function Sobre() {
  const navigation = useNavigation();
  const [contatos, setContatos] = useState([]);

  //funcao para buscar contatos do servidor

  const listContatos = () => {
    axios
    .get("http://10.0.2.2:3000/Contatos")
    .then((resposta) => {
      setContatos(resposta.data)
    })
    .catch((error)=>{
      console.error("Erro ao buscar contatos." + error)
    })
  };

  // funcao para excluir um contato
  const deleteContato = (id) => {
    axios
    .delete(`http://10.0.2.2:3000/Contatos/${id}`)
      .then(() =>{
        // Atualizar a lista de contatos
        setContatos(contatos.filter((contato)=> contato.id !== id));
        Alert.alert("Sucesso, contato excluido com sucesso!")
      })
      .catch((error) =>{
        console.error("Erro ao excluir contato.", error);
        Alert.alert("Erro, não foi possivel excluir.")
      });
  }

  // funcao para editar contato
const editarContato = (id) =>{
  axios
  .put(`http://10.0.2.2:3000/Contatos/${id}`)

}
  // Use o useEffect para buscar dados.

  useEffect(()=>{
    listContatos();
  }, [])

  return (
    <ScrollView>
       <View style={style.container}>
        <Text style={style.title}>Lista de contatos</Text>
        {contatos.length > 0 ?(
           contatos.map((contato, index)=>(
            <View key={index} style={style.contatoItem}>
              <Text>{contato.nome}</Text>
              <Text>{contato.telefone}</Text>
              <Button
              title="Excluir"
              color="orange" 
              onPress={() => deleteContato(contato.id)}
               />
               <Button
               title="Editar"
               color="blue"
               onPress={() => navigation.navigate('Editar', contato.id)}
               />
            </View>
           ))
        ): (
          <Text style={style.noContacts}>Nenhum contato disponivel</Text>
        )}
    </View>
    </ScrollView>
   
  )
}

const style = StyleSheet.create({
  container:{
    padding: 10,
  },
  title:{
    fontSize:20,
    fontWeight:"bold",
    marginBottom:10
  },
  contatoItem:{
    padding:10,
    borderBottomWidth: 1,
    borderBottomColor:"#ccc"
  },
  noContacts:{
    fontSize: 20,
    color:"gray",
    textAlign:"center",
    marginTop:20
  }
})