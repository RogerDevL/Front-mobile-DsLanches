import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import HeaderForm from '../Components/HeaderForm';

export default function Contato() {
  const navigation = useNavigation();
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [pedidos, setPedidos] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [observacao, setObservacao] = useState('');

  const enviarPedido = async () => {
    if (!nome || !telefone || !pedidos || !quantidade || !observacao) {
      Alert.alert("Erro, por favor preencha todos os campos");  
      return;
    }

    try {
       await axios.post('http://10.0.2.2:3000/api/pedidos', {
        nome,
        telefone,
        pedidos,
        quantidade,
        observacao,
      }, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

     
      Alert.alert('Sucesso', 'Pedido sendo preparado...');
      setNome('');
      setTelefone('');
      setPedidos('');
      setQuantidade('');
      setObservacao('');
      navigation.navigate('Home');
    } catch (error) {
      
      if (error.response) {
        Alert.alert('Erro', 'Erro ao enviar pedido: ' + error.response.data.message);
      } else {
        Alert.alert('Erro', 'Erro de conexão: ' + error.message);
      }
    }
  }

  return (
    <View>
      <HeaderForm />
      <View style={styles.containerForm}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
          value={nome}
          onChangeText={setNome}
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
          value={telefone}
          onChangeText={setTelefone}
        />

        <Text style={styles.label}>Pedido</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu pedido"
          value={pedidos}
          onChangeText={setPedidos}
        />

        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade"
          value={quantidade}
          onChangeText={setQuantidade}
        />

        <Text style={styles.label}>Observação</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua observação"
          value={observacao}
          onChangeText={setObservacao}
        />

        <TouchableOpacity style={styles.button} onPress={enviarPedido}>
          <Text style={styles.buttonText}>Enviar Pedido</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerForm: {
    padding: 20,
    width: '100%',
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  button: {
    backgroundColor: 'orange', 
    padding: 15, 
    borderRadius: 5, 
    left: '50%',
    transform: [{ translateX: -75 }],
    width: 150, 
    marginTop: 10,
  },
  buttonText: {
    color: 'white', 
    textAlign: 'center',
    fontWeight: 'bold', 
  },
  goBack: {
    paddingBottom: 20,
  },
});