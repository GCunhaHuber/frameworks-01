import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function HomeScreen() {

    return (
        <View>
            <Text>Page Login</Text>
            <Link href="/cadastro">Ir para a tela de cadastro</Link>
            <Link href="/">Ir para a home</Link>
            <Link href="/listagem">Ir para a tela de listagem</Link>
            <Link href="/sobre">Ir para a tela de sobre</Link>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});