import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';
import Header from '../components/Header';
import { Link } from 'expo-router';

export default function HomeScreen() {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={{ maxWidth: 500 }}>
        <Text style={styles.title}>Bem-vindo à Gráfica Pelotense!</Text>

        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, { width: width * 0.4, height: (width * 0.4) * 0.6 }]}
            source={{ uri: '../assets/images/frase-home.png' }}
            resizeMode="contain"
          />
        </View>

        <Text style={styles.description}>
          A Gráfica Pelotense oferece uma ampla gama de serviços de impressão, desde cartões de visita até livros de alta qualidade.
          Trabalhamos com dedicação para entregar o melhor produto aos nossos clientes.
        </Text>

        <View style={styles.buttonContainer}>
          <Link href="/contato" style={styles.button}>
            <Text style={styles.buttonText}>Conheça nossos serviços</Text>
          </Link>

          <Link href="/contato" style={styles.button}>
            <Text style={styles.buttonText}>Entre em contato</Text>
          </Link>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3A61',
    padding: 20,
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 20,
  },
  description: {
    fontSize: 16,
    color: '#F5F5DC',
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    maxWidth: 500,
  },
  button: {
    backgroundColor: '#61dafb',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    textAlign: 'center',
    marginHorizontal: 10,
    flex: 1,
  },
  buttonText: {
    color: '#20232a',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
