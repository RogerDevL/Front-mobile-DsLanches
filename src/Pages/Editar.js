import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, TouchableOpacity } from 'react-native'
import HeaderForm from '../Components/HeaderForm';
export default function Editar() {
  return (
    <View>
      <HeaderForm />
      <View style={styles.containerForm}>
        <Text style={styles.label}>Nome</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o nome"
        
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o telefone"
        />

        <Text style={styles.label}>Pedido</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu pedido"
        />

        <Text style={styles.label}>Quantidade</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a quantidade"
        />

        <Text style={styles.label}>Observação</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua observação"
        />

        <TouchableOpacity style={styles.button}>
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
    backgroundColor: 'orange', // Cor de fundo laranja
    padding: 15, // Espaçamento interno
    borderRadius: 5, // Bordas arredondadas
    left: '50%', // Centraliza horizontalmente
    transform: [{ translateX: -75 }],
    width: 150, // Ajusta para centralizar corretamente (75 é metade da largura do botão)
    marginTop: 10,
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    textAlign: 'center', // Centraliza o texto
    fontWeight: 'bold', // Negrito
  },
  goBack: {
    paddingBottom: 20,
  },
});