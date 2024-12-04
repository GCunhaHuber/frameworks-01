import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, useWindowDimensions, TouchableOpacity } from 'react-native';
import { Link, Href } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function HomeScreen() {
  const { width } = useWindowDimensions();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isSmallScreen = width < 600;

  return (
    <View style={styles.container}>
      {/* Navbar fixa */}
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>Gráfica Pelotense</Text>
        {isSmallScreen ? (
          <TouchableOpacity 
            onPress={() => setIsMenuOpen(!isMenuOpen)}
            style={styles.hamburgerButton}
          >
            <Feather name={isMenuOpen ? 'x' : 'menu'} size={24} color="#fff" />
          </TouchableOpacity>
        ) : (
          <View style={styles.navLinks}>
            <Link href={"/" as Href} style={styles.navLink}>Home</Link>
            <Link href={"/servicos" as Href} style={styles.navLink}>Serviços</Link>
            <Link href={"/sobre" as Href} style={styles.navLink}>Sobre</Link>
            <Link href={"/contato" as Href} style={styles.navLink}>Contato</Link>
            <Link href={"/cadastro" as Href} style={styles.navLink}>Cadastro</Link>
            <Link href={"/login" as Href} style={styles.navLink}>Login</Link>
          </View>
        )}
      </View>

      {/* Menu dropdown para telas pequenas */}
      {isSmallScreen && isMenuOpen && (
        <View style={styles.dropdownMenu}>
          <Link href={"/" as Href} style={styles.dropdownLink}>Home</Link>
          <Link href={"/servicos" as Href} style={styles.dropdownLink}>Serviços</Link>
          <Link href={"/sobre" as Href} style={styles.dropdownLink}>Sobre</Link>
          <Link href={"/contato" as Href} style={styles.dropdownLink}>Contato</Link>
          <Link href={"/cadastro" as Href} style={styles.dropdownLink}>Cadastro</Link>
          <Link href={"/login" as Href} style={styles.dropdownLink}>Login</Link>
        </View>
      )}

      {/* ScrollView para rolar o conteúdo */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Bem-vindo à Gráfica Pelotense!</Text>

        <Image
          style={[styles.image, { width: width * 0.85, height: (width * 0.85) * 0.6 }]}
          source={{ uri: '../assets/images/img-home.jpg' }}
          resizeMode="contain"
        />

        <Text style={styles.description}>
          A Gráfica Pelotense oferece uma ampla gama de serviços de impressão, desde cartões de visita até livros de alta qualidade.
          Trabalhamos com dedicação para entregar o melhor produto aos nossos clientes.
        </Text>

        {/* Botões alinhados */}
        <View style={isSmallScreen ? styles.buttonColumn : styles.buttonRow}>
          <Link href={"/servicos" as Href} style={styles.button}>
            <Text style={styles.buttonText}>Conheça nossos serviços</Text>
          </Link>
          <Link href={"/contato" as Href} style={styles.button}>
            <Text style={styles.buttonText1}>Entre em contato</Text>
          </Link>
        </View>
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
    fontSize: 24,
    fontWeight: 'bold',
    color: '#61dafb',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    borderRadius: 20,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    color: '#F5F5DC',
    textAlign: 'center',
    marginBottom: 20,
    width: '100%',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 500,
  },
  buttonColumn: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#61dafb',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    alignItems: 'center',
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
  },
  buttonText: {
    color: '#20232a',
    fontWeight: 'bold',
    fontSize: 16
  },
  buttonText1: {
    color: '#20232a',
    fontWeight: 'bold',
    fontSize: 16,
    padding: 28
  },
});
