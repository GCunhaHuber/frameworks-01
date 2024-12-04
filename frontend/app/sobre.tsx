import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import { Link, Href } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import Header from '../components/Header';

export default function SobreScreen() {
  const { width, height } = Dimensions.get('window');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(width < 600);

  React.useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(Dimensions.get('window').width < 600);
    };

    Dimensions.addEventListener('change', handleResize);
    return () => {
      Dimensions.removeEventListener('change', handleResize);
    };
  }, []);

  return (
    <View style={styles.container}>
      {/* Navbar fixa */}
      <View style={styles.navbar}>
        <Text style={styles.navTitle}>Sobre a Gráfica Pelotense</Text>
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

      {/* Corpo do conteúdo */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.title}>Sobre a Gráfica Pelotense</Text>

        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, { width: width * 0.8, height: (width * 0.8) * 0.6 }]} 
            source={require('../assets/images/localizacao.jpg')}
            resizeMode="contain" 
          />
        </View>

        <Text style={styles.text}>
          A Gráfica Pelotense é uma empresa localizada em Pelotas, Rio Grande do Sul, especializada na produção e impressão de livros de alta qualidade. Nosso compromisso é fornecer soluções gráficas que atendam às necessidades de editoras, autores independentes e empresas, sempre com excelência, precisão e dedicação.
        </Text>

        <Text style={styles.text}>
          Com anos de experiência no mercado, investimos constantemente em tecnologia e inovação para garantir o melhor acabamento e a satisfação de nossos clientes. Nossa missão é transformar ideias em obras impressas, promovendo a cultura e o conhecimento por meio de produtos gráficos que refletem o cuidado em cada detalhe.
        </Text>

        <Text style={styles.text}>
          Venha nos visitar ou entre em contato para saber mais sobre nossos serviços!
        </Text>
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
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    borderRadius: 20,
  },
  text: {
    fontSize: 16,
    color: '#F5F5DC',
    marginBottom: 20,
    textAlign: 'center',
  },
});