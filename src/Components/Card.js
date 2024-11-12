import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

export default function Card(props) {
  return (
    <View style={styles.card}>
        <Text style={styles.cardTitle}>{props.title}</Text>
        <Text style={styles.cardContent}>{props.content}</Text>
        <Button title={props.buttonText} onPress={props.onPress}/>
    </View>
  )
}

const styles = StyleSheet.create({
    card:{
        padding: 10,
        borderRadius: 10,
        width: 300,
        margin: 10,
        backgroundColor: "#FFF3E5",
        borderWidth: 2, 
        borderColor: "orange",
    },
    cardContent:{
        fontSize:14,
        marginBottom:10,
        textAlign:'center'
    }
})
