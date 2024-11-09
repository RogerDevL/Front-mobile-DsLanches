import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Você pode usar 'react-native-vector-icons' para ícones
import { useNavigation } from '@react-navigation/native';
import HeaderForm from '../Components/HeaderForm';

export default function TelaAdm() {
    return (
        <View>
        <HeaderForm />
        <ScrollView>
            <View style={styles.container}>
                {/* Card de Pedido 1 */}
                <View style={styles.orderItem}>
                    <FontAwesome name="user-circle-o" size={40} color="#000" style={styles.icon} />
                    <View style={styles.clientDetails}>
                        <Text style={styles.name}>Fulano D Silva</Text>
                        <Text style={styles.phone}>(11) 999999999</Text>
                    </View>
                    <View style={styles.orderInfo}>
                        <Text style={styles.orderNumber}>Pedido: 1</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button} onPress={() => handleEdit(1)}>
                                <Text style={styles.buttonText}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={() => handleDelete(1)}>
                                <Text style={styles.buttonText}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                {/* Card de Pedido 2 */}
                <View style={styles.orderItem}>
                    <FontAwesome name="user-circle-o" size={40} color="#000" style={styles.icon} />
                    <View style={styles.clientDetails}>
                        <Text style={styles.name}>Ciclano de Souza</Text>
                        <Text style={styles.phone}>(11) 988888888</Text>
                    </View>
                    <View style={styles.orderInfo}>
                        <Text style={styles.orderNumber}>Pedido: 2</Text>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Editar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button}>
                                <Text style={styles.buttonText}>Excluir</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
},
orderItem: {
    flexDirection: 'row',
    backgroundColor: '#FFE0B2',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    alignItems: 'center',
},
icon: {
    marginRight: 10,
},
clientDetails: {
    flex: 1,
},
name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
},
phone: {
    fontSize: 14,
    color: '#555',
},
orderInfo: {
    alignItems: 'flex-end',
},
orderNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
},
buttonContainer: {
    flexDirection: 'row',
    marginTop: 10,
},
button: {
    backgroundColor: '#007BFF',
    borderRadius: 5,
    padding: 10,
    marginLeft: 5,
},
buttonText: {
    color: '#fff',
    fontWeight: 'bold',
},
});