import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Você pode usar 'react-native-vector-icons' para ícones

export default function TelaAdm() {
    return (
        <View style={styles.container}>
            {/* Cabeçalho */}
            <View style={styles.header}>
                <Text style={styles.backArrow}>{'<'}</Text>
                <Text style={styles.screenTitle}>Pedidos Clientes</Text>
            </View>

            {/* Card de Pedido 1 */}
            <View style={styles.orderItem}>
                <FontAwesome name="user-circle-o" size={40} color="#000" style={styles.icon} />
                <View style={styles.clientDetails}>
                    <Text style={styles.name}>Fulano D Silva</Text>
                    <Text style={styles.phone}>(11) 999999999</Text>
                </View>
                <View style={styles.orderInfo}>
                    <Text style={styles.orderNumber}>Pedido: 1</Text>
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
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backArrow: {
        fontSize: 24,
        marginRight: 10,
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
});