import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Você pode usar 'react-native-vector-icons' para ícones
import HeaderForm from '../Components/HeaderForm';

export default function PedidosClientes() {
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
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton}>
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
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.editButton}>
                            <Text style={styles.buttonText}>Editar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.deleteButton}>
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
    screenTitle: {
        fontSize: 24,
        fontWeight: 'bold',
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
    buttonsContainer: {
        flexDirection: 'row',
        marginTop: 5,
    },
    editButton: {
        backgroundColor: '#4CAF50',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        marginRight: 5,
    },
    deleteButton: {
        backgroundColor: '#F44336',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 12,
        fontWeight: 'bold',
    },
});