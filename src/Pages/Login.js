import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import HeaderForm from '../Components/HeaderForm';
import { useNavigation } from '@react-navigation/native';
import TelaAdm from './TelaAdm';
 
export default function Login() {
    const navigation = useNavigation();

    return (
        <View>
            <HeaderForm />
            <ScrollView>
            <View style={styles.container}>
            <View style={styles.formContainer}>
                <Text style={styles.label}>Nome</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite seu nome"
                   
                />
                <Text style={styles.label}>Senha</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Digite sua senha"
                    secureTextEntry
                  
                />
            </View>
 
            {/* Continue Button */}
            <TouchableOpacity style={styles.continueButton} onPress={() => navigation.navigate('TelaAdm')}>
                <Text style={styles.continueButtonText}>LOGIN ADM</Text>
            </TouchableOpacity>
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
    formContainer: {
        backgroundColor: '#FFE0B2',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        marginBottom: 5,
        color: '#555',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ddd',
        marginBottom: 15,
    },
    continueButton: {
        backgroundColor: '#F57C00',
        paddingVertical: 15,
        borderRadius: 10,
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
});