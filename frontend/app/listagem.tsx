import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default function ListagemScreen({ route }) {
    const email = route?.params?.email || '';
    const [livros, setLivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Faz a requisição para buscar os livros
        axios.get('http://localhost:3001/livros')
            .then(response => {
                setLivros(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Erro ao buscar os livros:", error);
                setLoading(false);
            });
    }, []);

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.card}>
            <Image source={{ uri: item.capa }} style={styles.image} />
            <View style={styles.textContainer}>
                <Text style={styles.bookTitle}>{item.title}</Text>
                <Text style={styles.bookAuthor}>Autor: {item.autor}</Text>
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <Text style={styles.title}>- LISTAGEM DE LIVROS -</Text>
            <Text style={styles.subtitle}>Bem-vindo, {email}</Text>

            {loading ? (
                <ActivityIndicator size="large" color="#61dafb" style={styles.loading} />
            ) : (
                <FlatList
                    data={livros}
                    keyExtractor={item => item.id.toString()}
                    renderItem={renderItem}
                    contentContainerStyle={styles.listContainer}
                />
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1E3A61',
        paddingTop: 80,
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 28,
        color: '#61dafb',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    subtitle: {
        fontSize: 18,
        color: '#F5F5DC',
        textAlign: 'center',
        marginBottom: 20,
    },
    loading: {
        marginTop: 20,
    },
    listContainer: {
        paddingBottom: 20,
    },
    card: {
        flexDirection: 'row',
        backgroundColor: '#3E5C89',
        borderRadius: 10,
        marginBottom: 15,
        padding: 10,
        alignItems: 'center',
        elevation: 5,
    },
    image: {
        width: 80,
        height: 120,
        borderRadius: 10,
        marginRight: 15,
    },
    textContainer: {
        flex: 1,
    },
    bookTitle: {
        fontSize: 20,
        color: '#F5F5DC',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    bookAuthor: {
        fontSize: 16,
        color: '#F5F5DC',
    },
});
