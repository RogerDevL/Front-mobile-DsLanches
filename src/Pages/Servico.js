import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Servico() {
  const [servicos, setServicos] = useState([]);


  const listServicos = () =>{
    axios.get("http://10.0.2.2:3000/faq")
    .then((resposta)=>{
      setServicos(resposta.data)
    })
    .catch((error)=>{
      console.error("Erro ao buscar contatos." + error)
    })
  }

  useEffect(() =>{
    listServicos();
  }, [])

  return (
    <View style={style.container}>
        <Text style={style.title}>Nosso serviço</Text>
        {servicos.length > 0 ?(
          servicos.map((servico, index)=>(
            <View key={index} style={style.contatoItem}>
              <Text>{servico.pergunta}</Text>
              <Text>{servico.resposta}</Text>
            </View>
          ))

        ):(
          <Text style={style.noContacts}>Nenhum serviço disponivel</Text>
        )}
    </View>
  )
}

const style = StyleSheet.create({
  container:{
    padding: 10,
  },
  title:{
    fontSize:15,
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