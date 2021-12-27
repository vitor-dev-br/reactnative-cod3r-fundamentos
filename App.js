import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {
  return (
    // SafeAreaView faz com quê o conteúdo da View seja correspondente a área útil do IOS.
    // No Android a tela começa atrás do relógio e indicadores de aplicativos
    // No Iphone ele fica atrás da faixa preta no topo da tela
    <SafeAreaView style={styles.container}>
      <Text>Olá!</Text>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    flexDirection: 'row'
  },
});
