import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListagemScreen({ route }: { route: any }) {
    const { email } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Bem-vindo à Tela Inicial!</Text>
            <Text style={styles.title}>Seu e-mail é: {email}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E3A61',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    title: {
        fontSize: 32,
        color: '#F5F5DC',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    emailText: {
        fontSize: 18,
        color: '#F5F5DC',
    },
});
