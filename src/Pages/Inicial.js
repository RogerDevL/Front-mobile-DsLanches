import React from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Inicial() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/primeiro.png')} 
        style={styles.backgroundImage}
      />
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, // Faz com que o container ocupe toda a tela
  },
  backgroundImage: {
    position: 'absolute', // A imagem será posicionada de forma absoluta
    top: 0,
    left: -80,
    right: 0,
    bottom: 0,
    width: '121%', // Largura total
    height: '101%', // Altura total
    resizeMode: 'cover', // Ajusta a imagem para cobrir a tela
  },
  button: {
    backgroundColor: 'orange', // Cor de fundo laranja
    padding: 15, // Espaçamento interno
    borderRadius: 5, // Bordas arredondadas
    position: 'absolute', // Posiciona o botão
    bottom: 400, // Distância do fundo da tela (ajuste conforme necessário)
    left: '50%', // Centraliza horizontalmente
    transform: [{ translateX: -75 }],
    width:150 // Ajusta para centralizar corretamente (75 é metade da largura do botão)
  },
  buttonText: {
    color: 'white', // Cor do texto do botão
    textAlign: 'center', // Centraliza o texto
    fontWeight: 'bold', // Negrito
  },
});