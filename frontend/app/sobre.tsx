import React from 'react';
import Header from '../components/Header';
import { View, Text, StyleSheet, Image, ScrollView, Dimensions } from 'react-native';

export default function SobreScreen() {
  const { width } = Dimensions.get('window');

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView style={{ maxWidth: 500 }}>
        <Text style={styles.title}>Sobre a Gráfica Pelotense</Text>

        <View style={styles.imageContainer}>
          <Image
            style={[styles.image, { width: width * 0.2, height: (width * 0.4) * 0.6 }]}
            source={require('../assets/images/localizacao.jpg')}
            resizeMode="cover"
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
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3A61',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 500,
    paddingVertical: 10,
    backgroundColor: '#61dafb',
    borderBottomWidth: 2,
    borderBottomColor: '#20232a',
    alignSelf: 'center',
  },
  linkText: {
    color: '#20232a',
    textDecorationLine: 'none',
    fontSize: 16,
    fontWeight: 'bold',
  },
  imageContainer: {
    marginBottom: 20,
    alignItems: 'center',
    borderRadius: 20,
    overflow: 'hidden',
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
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
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
