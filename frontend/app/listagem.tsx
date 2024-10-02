import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ListagemScreen({ route }: { route: any }) {
    const email = route?.params?.email || 'Email não fornecido';

    return (
        <View style={styles.container}>
            <Text style={styles.title}>- LISTAGEM -</Text>
            <Text style={styles.subtitle}>Área destinada para cadastro de livros.</Text>
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
        marginBottom: 10, // Ajuste o espaçamento
        fontWeight: 'bold',
    },
    subtitle: {
        fontSize: 18,
        color: '#F5F5DC',
        textAlign: 'center', // Alinha o texto ao centro
    },
});
