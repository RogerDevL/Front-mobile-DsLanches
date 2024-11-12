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
    backgroundColor: 'orange', 
    paddingTop:50,
    flexDirection: 'row', 
    alignItems: 'center',
    height:120, 
    display:'flex',
    justifyContent:'space-evenly'
  },
  backButton: {
    marginRight: 10,
    marginLeft:-95 
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight:25 
  },
});

export default HeaderForm;