import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Platform, Alert, useWindowDimensions } from 'react-native';
import { Link } from 'expo-router';

export default function CadastroScreen() {
    const { width } = useWindowDimensions();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const showAlert = (title, message) => {
        if (Platform.OS === 'web') {
            window.alert(`${title}: ${message}`);
        } else {
            Alert.alert(title, message);
        }
    };

    const handleCadastro = () => {
        const trimmedName = name.trim();
        const trimmedEmail = email.trim();
        const trimmedPassword = password.trim();
        const trimmedConfirmPassword = confirmPassword.trim();

        if (!trimmedName || !trimmedEmail || !trimmedPassword || !trimmedConfirmPassword) {
            showAlert('Erro', 'Por favor, preencha todos os campos corretamente.');
        } else if (trimmedPassword !== trimmedConfirmPassword) {
            showAlert('Erro', 'As senhas não coincidem.');
        } else {
            showAlert('Sucesso', 'Cadastro concluído com sucesso!');
        }
    };

    // Define estilos dinâmicos de acordo com a largura da tela
    const isLargeScreen = width > 1280;
    const inputWidth = isLargeScreen ? '80%' : '100%';
    const buttonWidth = isLargeScreen ? '80%' : '100%';

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Text style={styles.title}>Cadastro</Text>

                <TextInput
                    style={[styles.input, { width: inputWidth }]}
                    placeholder="Nome"
                    placeholderTextColor="#DDD"
                    value={name}
                    onChangeText={setName}
                />

                <TextInput
                    style={[styles.input, { width: inputWidth }]}
                    placeholder="E-mail"
                    placeholderTextColor="#DDD"
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />

                <TextInput
                    style={[styles.input, { width: inputWidth }]}
                    placeholder="Senha"
                    placeholderTextColor="#DDD"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TextInput
                    style={[styles.input, { width: inputWidth }]}
                    placeholder="Confirmar Senha"
                    placeholderTextColor="#DDD"
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={[styles.button, { width: buttonWidth }]} onPress={handleCadastro}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>

                <Link href="/login" style={styles.linkText}>Já tem uma conta? Fazer login</Link>
                <Link href="/" style={styles.linkText}>Ir para a home</Link>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1E3A61',
        padding: 20,
    },
    scrollContainer: {
        alignItems: 'center',
        paddingVertical: 20,
        width: '100%',
        maxWidth: 700,
    },
    title: {
        fontSize: 32,
        color: '#F5F5DC',
        marginBottom: 30,
        fontWeight: 'bold',
    },
    input: {
        maxWidth: 1200,
        minWidth: 300,
        height: 60,
        backgroundColor: '#3E5C89',
        borderRadius: 10,
        paddingHorizontal: 15,
        color: '#F5F5DC',
        marginBottom: 20,
        fontSize: 18,
    },
    button: {
        height: 60,
        backgroundColor: '#F5F5DC',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    buttonText: {
        color: '#1E3A61',
        fontSize: 20,
        fontWeight: 'bold',
    },
    linkText: {
        color: '#F5F5DC',
        marginTop: 20,
        textDecorationLine: 'underline',
        fontSize: 16,
    },
});
