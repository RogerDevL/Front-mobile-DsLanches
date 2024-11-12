import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import HeaderForm from '../Components/HeaderForm';
import { useNavigation, useRoute } from '@react-navigation/native';
import axios from 'axios';

export default function Editar() {
  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params;
  const [pedido, setPedido] = useState(null);
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [observacao, setObservacao] = useState('');
  const [pedidos, setPedidos] = useState('');

  const buscarPedido = async () => {
    try {
      const resposta = await axios.get(`http://10.92.198.22:3000/api/pedidos/${id}`);
      const pedidoData = resposta.data.pedido;
      setPedido(pedidoData);
      setNome(pedidoData.nome);
      setTelefone(pedidoData.telefone);
      setObservacao(pedidoData.observacao);
      setQuantidade(pedidoData.quantidade); 
      setPedidos(pedidoData.pedidos);
    } catch (error) {
      console.error('Erro ao buscar pedido', error);
      Alert.alert('Erro ao buscar pedido');
    }
  };

  useEffect(() => {
    buscarPedido();
  }, []);

  const atualizarPedido = async () => {
    try {
      await axios.put(`http://10.92.198.22:3000/api/pedidos/${id}`, {
        nome,
        telefone,
        pedidos,
        quantidade,
        observacao,
      });
      Alert.alert('Pedido atualizado com sucesso!');
      navigation.navigate('Home');
    } catch (error) {
      console.error('Erro ao atualizar pedido', error);
      Alert.alert('Erro ao atualizar pedido');
    }
  };

  return (
    <View>
      <HeaderForm />
      <View style={styles.containerForm}>
        {pedido ? (
          <>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              placeholder={nome ? '' : 'Digite seu nome'} 
              value={nome}
              onChangeText={setNome}
            />

            <Text style={styles.label}>Telefone</Text>
            <TextInput
              style={styles.input}
              placeholder={telefone || 'Digite o telefone'} 
              value={telefone}
              onChangeText={setTelefone}
            />

            <Text style={styles.label}>Pedido</Text>
            <TextInput
              style={styles.input}
              placeholder={pedidos || 'Digite seu pedido'} 
              value={pedidos}
              onChangeText={setPedidos}
            />

            <Text style={styles.label}>Quantidade</Text>
            <TextInput
              style={styles.input}
              placeholder={quantidade || 'Digite a quantidade'} 
              value={quantidade} 
              keyboardType="numeric"
              onChangeText={setQuantidade}
            />

            <Text style={styles.label}>Observação</Text>
            <TextInput
              style={styles.input}
              placeholder={observacao || 'Digite sua observação'} 
              value={observacao}
              onChangeText={setObservacao}
            />

            <TouchableOpacity style={styles.button} onPress={atualizarPedido}>
              <Text style={styles.buttonText}>Editar Pedido</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text>Carregando...</Text>
        )}
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