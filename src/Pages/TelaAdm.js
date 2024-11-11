import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderForm from '../Components/HeaderForm';
import axios from 'axios';

export default function TelaAdm() {
    const navigation = useNavigation();
    const [pedidos, setPedidos] = useState([]);

    const listaPedidos = async () => {
        await axios
            .get("http://10.92.198.22:3000/api/pedidos/")
            .then((resposta) => {
                setPedidos(resposta.data.pedido);
            })
            .catch((error) => {
                if (error.response && error.response.status === 404) {
                    Alert.alert("Nenhum pedido encontrado");
                } else {
                    Alert.alert("Erro ao carregar pedidos");
                }
            });
    };

    useEffect(() => {
        listaPedidos();
    }, []);

   const deletarPedido = async (id) => {

    try {
        await 
        axios.delete(`http://10.92.198.22:3000/api/pedidos/${id}`)
        .then(() => {
            setPedidos(pedidos.filter((pedido)=> pedido.id !== id))
        })
        Alert.alert('Pedido deletado com sucesso!')
    } catch (error) {
        console.error('Erro ao excluir', error);
        Alert.alert('Erro, não foi possível excluir.')
    }

}

    return (
        <View style={styles.container}>
            <HeaderForm />
            <ScrollView>
                {pedidos.length > 0 ? (
                    pedidos.map((pedido) => (
                        <View key={pedido.id} style={styles.pedidoItem}>
                            <View style={styles.pedidoInfo}>
                                <Text style={styles.h2}>{pedido.pedidos} || Pedido de número: {pedido.id}</Text>
                                <Text style={styles.h2}>{pedido.nome}</Text>
                                <Text style={styles.p}>Observação: {pedido.observacao}</Text>
                            </View>
                            <View style={styles.quantidade}>
                                <Text>Quantidade: {pedido.quantidade}</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity style={styles.buttonEditar} onPress={() => navigation.navigate('TelaEditar') }>
                                    <Text style={styles.buttonText}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => deletarPedido(pedido.id)}>
                                    <Text style={styles.buttonText}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                ) : (
                    <Text>Nenhum disponível</Text>
                )}
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
    },
    pedidoItem: {
        marginBottom: 15, // Adiciona espaço entre os pedidos
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ddd",
    },
    pedidoInfo: {
        marginBottom: 10, // Espaço entre as informações do pedido e a quantidade
    },
    h2: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
    },
    p: {
        fontSize: 14,
        color: "#333",
    },
    quantidade: {
        fontSize: 14,
        marginBottom:10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between', // Para distribuir os botões
    },
    button: {
        backgroundColor: 'red',
        borderRadius: 5,
        padding: 10,
        height: 50,
        flex: 1, // Para que os botões ocupem espaço igual
        marginHorizontal: 5, // Espaço entre os botões
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center', // Centraliza o texto no botão
    },
    buttonEditar: {
        backgroundColor: 'orange',
        borderRadius: 5,
        padding: 10,
        height: 50,
        flex: 1, // Para que os botões ocupem espaço igual
        marginHorizontal: 5, // Espaço entre os botões
    },
});