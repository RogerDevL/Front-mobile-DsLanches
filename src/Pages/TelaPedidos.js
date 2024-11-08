import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import HeaderForm from '../Components/HeaderForm';

export default function TelaPedidos() {
    return (
        <View>
            <HeaderForm />
            <ScrollView>
            <View style={styles.container}>
            <ScrollView style={styles.pedidosList}>
                {/** Card de Pedido 1 */}
                <View style={styles.pedidoItem}>
                    <View style={styles.pedidoInfo}>
                        <Text style={styles.h2}>Pizza de frango...</Text>
                        <Text style={styles.p}>ID: 1</Text>
                        <Text style={styles.preco}>R$ 99,80</Text>
                        <Text style={styles.tempoEspera}>Tempo de espera: 10 min</Text>
                    </View>
                    <View style={styles.quantidade}>
                        <Text>Quantidade: 2</Text>
                    </View>
                </View>

                {/** Card de Pedido 2 */}
                <View style={styles.pedidoItem}>
                    <View style={styles.pedidoInfo}>
                        <Text style={styles.h2}>Pizza de frango...</Text>
                        <Text style={styles.p}>ID: 2</Text>
                        <Text style={styles.preco}>R$ 149,70</Text>
                        <Text style={styles.tempoEspera}>Tempo de espera: 15 min</Text>
                    </View>
                    <View style={styles.quantidade}>
                        <Text>Quantidade: 3</Text>
                    </View>
                </View>

                {/** Card de Pedido 3 */}
                <View style={styles.pedidoItem}>
                    <View style={styles.pedidoInfo}>
                        <Text style={styles.h2}>Pizza de frango...</Text>
                        <Text style={styles.p}>ID: 3</Text>
                        <Text style={styles.preco}>R$ 49,90</Text>
                        <Text style={styles.tempoEspera}>Tempo de espera: 20 min</Text>
                    </View>
                    <View style={styles.quantidade}>
                        <Text>Quantidade: 1</Text>
                    </View>
                </View>

                {/** Card de Pedido 4 */}
                <View style={styles.pedidoItem}>
                    <View style={styles.pedidoInfo}>
                        <Text style={styles.h2}>Pizza de frango...</Text>
                        <Text style={styles.p}>ID: 4</Text>
                        <Text style={styles.preco}>R$ 99,80</Text>
                        <Text style={styles.tempoEspera}>Tempo de espera: 25 min</Text>
                    </View>
                    <View style={styles.quantidade}>
                        <Text>Quantidade: 2</Text>
                    </View>
                </View>
            </ScrollView>
        </View>
            </ScrollView>

        </View>
       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxWidth: 400,
        margin: '0 auto',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5, // Para Android
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    backButton: {
        backgroundColor: 'transparent',
        borderWidth: 0,
    },
    backButtonText: {
        fontSize: 24,
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
    },
    pedidosList: {
        backgroundColor: '#ffe0b2',
        borderRadius: 10,
        padding: 10,
    },
    pedidoItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    pedidoInfo: {
        flex: 1,
    },
    h2: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    p: {
        fontSize: 14,
        color: '#333',
    },
    preco: {
        color: '#000',
        fontWeight: 'bold',
    },
    tempoEspera: {
        color: 'green',
    },
    quantidade: {
        alignSelf: 'center',
        fontSize: 14,
    },
});