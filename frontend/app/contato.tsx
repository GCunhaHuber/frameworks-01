import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, useWindowDimensions, ScrollView, StyleSheet, Alert, Platform } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function ContatoScreen() {
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = width < 600;

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

    const showAlert = (title: string, message: string) => {
        if (Platform.OS === 'web') {
            window.alert(`${title}: ${message}`);
        } else {
            Alert.alert(title, message);
        }
    };

  const handleEnviar = async () => {
    const trimmedNome = nome.trim();
    const trimmedEmail = email.trim();
    const trimmedMensagem = mensagem.trim();

    if (!trimmedNome || !trimmedEmail || !trimmedMensagem) {
      showAlert('Erro', 'Por favor, preencha todos os campos corretamente.');
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/contatos');
      const conts = await response.json();

      const nextId = conts.length > 0 ? Math.max(...conts.map((u) => u.id)) + 1 : 1;

      const contatoData = {
        id: nextId,
        nome: trimmedNome,
        email: trimmedEmail,
        mensagem: trimmedMensagem,
      };

      const postResponse = await fetch('http://localhost:3001/contatos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(contatoData),
      });

      if (postResponse.ok) {
        const data = await postResponse.json();
        showAlert('Sucesso', `Sua mensagem foi enviada com sucesso! ID: ${data.id}`);
        setNome('');
        setEmail('');
        setMensagem('');
      } else {
        const error = await postResponse.json();
        showAlert('Erro', `Falha ao enviar mensagem: ${error.message || 'Erro desconhecido'}`);
      }
    } catch (error) {
      showAlert('Erro', 'Não foi possível conectar ao servidor.');
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      {/* Navbar fixa */}
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>Contato</Text>
        {isSmallScreen ? (
          <TouchableOpacity
            onPress={() => setIsMenuOpen(!isMenuOpen)}
            style={styles.hamburgerButton}
          >
            <Feather name={isMenuOpen ? 'x' : 'menu'} size={24} color="#fff" />
          </TouchableOpacity>
        ) : (
          <View style={styles.navLinks}>
            <Link href="/" style={styles.navLink}>Home</Link>
            <Link href="/servicos" style={styles.navLink}>Serviços</Link>
            <Link href="/sobre" style={styles.navLink}>Sobre</Link>
            <Link href="/contato" style={styles.navLink}>Contato</Link>
            <Link href="/cadastro" style={styles.navLink}>Cadastro</Link>
            <Link href="/login" style={styles.navLink}>Login</Link>
          </View>
        )}
      </View>

      {/* Menu dropdown para telas pequenas */}
      {isSmallScreen && isMenuOpen && (
        <View style={styles.dropdownMenu}>
          <Link href="/" style={styles.dropdownLink}>Home</Link>
          <Link href="/servicos" style={styles.dropdownLink}>Serviços</Link>
          <Link href="/sobre" style={styles.dropdownLink}>Sobre</Link>
          <Link href="/contato" style={styles.dropdownLink}>Contato</Link>
          <Link href="/cadastro" style={styles.dropdownLink}>Cadastro</Link>
          <Link href="/login" style={styles.dropdownLink}>Login</Link>
        </View>
      )}

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Entre em Contato</Text>

        <TextInput
          style={styles.input}
          placeholder="Nome"
          placeholderTextColor="#DDD"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#DDD"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          style={styles.textArea}
          placeholder="Sua mensagem"
          placeholderTextColor="#DDD"
          value={mensagem}
          onChangeText={setMensagem}
          multiline
          numberOfLines={4}
        />
        <TouchableOpacity style={styles.button} onPress={handleEnviar}>
          <Text style={styles.buttonText}>Enviar Mensagem</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E3A61',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#20232a',
    paddingHorizontal: 16,
    paddingVertical: 12,
    position: 'absolute',
    top: 0,
    width: '100%',
    zIndex: 10,
  },
  navTitle: {
    color: '#61dafb',
    fontSize: 18,
    fontWeight: 'bold',
  },
  navLinks: {
    flexDirection: 'row',
  },
  navLink: {
    color: '#fff',
    fontSize: 16,
    marginHorizontal: 10,
  },
  hamburgerButton: {
    padding: 10,
  },
  dropdownMenu: {
    backgroundColor: '#20232a',
    paddingVertical: 10,
    position: 'absolute',
    top: 56,
    width: '100%',
    zIndex: 20,
    elevation: 5, 
  },
  dropdownLink: {
    color: '#61dafb',
    fontSize: 16,
    paddingVertical: 10,
    textAlign: 'center',
  },
  scrollContainer: {
    alignItems: 'center',
    paddingTop: 80,
    paddingBottom: 20,
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 28,
    color: '#F5F5DC',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  input: {
    width: '100%',
    maxWidth: 500,
    height: 60,
    backgroundColor: '#3E5C89',
    borderRadius: 10,
    paddingHorizontal: 15,
    color: '#F5F5DC',
    marginBottom: 20,
    fontSize: 18,
  },
  textArea: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#3E5C89',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 10,
    color: '#F5F5DC',
    marginBottom: 20,
    fontSize: 18,
    textAlignVertical: 'top',
  },
  button: {
    width: '100%',
    maxWidth: 500,
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
});
