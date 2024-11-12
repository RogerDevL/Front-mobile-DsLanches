import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, ScrollView, Alert } from "react-native";
import HeaderForm from "../Components/HeaderForm";
import axios from "axios";

export default function TelaPedidos() {
  const [pedidos, setPedidos] = useState([]);

  const listaPedidos = async () => {
    await axios
      .get("http://10.92.198.22:3000/api/pedidos/")
      .then((resposta) => {
        setPedidos(resposta.data.pedido);
      })
      .catch((error) => {
        if (error.status == 404) {
        } else {
          Alert.alert("Erro");
        }
      });
  };

  useEffect(() => {
    listaPedidos();
  }, []);

  return (
    <View>
      <HeaderForm />
      <ScrollView>
        {pedidos.length > 0 ? (
          pedidos.map((pedido, index) => (
            <View key={pedido.id} style={styles.pedidoItem}>
              <View key={index} style={styles.pedidoInfo}>
                <Text style={styles.h2}>{pedido.pedidos}</Text>
                <Text style={styles.p}>SEU PEDIDO É O DE NUMERO: {pedido.id}</Text>
                <Text style={styles.p}>Observação: {pedido.observacao}</Text>
                <Text style={styles.tempoEspera}>Tempo de espera: 10 min</Text>
              </View>
              <View style={styles.quantidade}>
                <Text>Quantidade: {pedido.quantidade}</Text>
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
    maxWidth: 400,
    margin: "0 auto",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5, 
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  backButton: {
    backgroundColor: "transparent",
    borderWidth: 0,
  },
  backButtonText: {
    fontSize: 24,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "bold",
  },
  pedidosList: {
    backgroundColor: "#ffe0b2",
    borderRadius: 10,
    padding: 10,
  },
  pedidoItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  pedidoInfo: {
    flex: 1,
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
  preco: {
    color: "#000",
    fontWeight: "bold",
  },
  tempoEspera: {
    color: "green",
  },
  quantidade: {
    alignSelf: "center",
    fontSize: 14,
  },
});
