import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons'; // Importe a biblioteca de ícones

const HeaderForm = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate('Home')}>
        <Icon name="arrow-back" size={24} color="white" /> 
      </TouchableOpacity>
      <Text style={styles.title}>DS LANCHES</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'orange', // Cor de fundo do cabeçalho
    paddingTop:50,
    flexDirection: 'row', // Alinhe os elementos em uma linha
    alignItems: 'center',
    height:120, 
    display:'flex',// Centralize os elementos verticalmente
    justifyContent:'space-evenly'
  },
  backButton: {
    marginRight: 10,
    marginLeft:-95 // Espaçamento entre o botão e o título
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight:25 // Cor do texto do título
  },
});

export default HeaderForm;