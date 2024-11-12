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

      <Text style={styles.welcomeText}>
        Bem-vindo ao DS'Lanches! 
      </Text>
      
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
  },
  backgroundImage: {
    position: 'absolute', 
    top: 0,
    left: -80,
    right: 0,
    bottom: 0,
    width: '121%', 
    height: '101%', 
    resizeMode: 'cover', 
  },
  button: {
    backgroundColor: 'orange', 
    padding: 15, 
    borderRadius: 5, 
    position: 'absolute', 
    bottom: 400, 
    left: '50%', 
    transform: [{ translateX: -75 }],
    width:150 
  },
  buttonText: {
    color: 'white', 
    textAlign: 'center', 
    fontWeight: 'bold',
  },
  welcomeText: {
    position: 'absolute', 
    top: 200, 
    left: '42%',
    transform: [{ translateX: -75 }], 
    color: 'orange', 
    fontSize: 20,
    textAlign: 'center', 
    marginBottom: 20, 
  },
});