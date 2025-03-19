import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default function App() {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>
          2 MODELOS DE COMPUTADORES 2026
        </Text>

        <View style={styles.pc}>
          <Image
            style={styles.modelos}
            source={require('./assets/mac.png')}
          />
          <Text style={styles.textDescription}>
            Embora detalhes específicos sobre o MacBook Pro 2026 ainda não tenham sido oficialmente divulgados pela Apple, espera-se que este modelo apresente avanços significativos em relação às versões anteriores. Rumores indicam que o MacBook Pro 2026 poderá incorporar o chip M6 da Apple, oferecendo desempenho aprimorado e maior eficiência energética. Além disso, há especulações sobre um design mais fino e leve, possivelmente com telas OLED para cores mais vibrantes e pretos profundos. No entanto, devido a atrasos na tecnologia OLED, o lançamento pode ter sido adiado.
          </Text>
        </View>

        <View style={styles.pc}>
          <Image
            style={styles.modelos}
            source={require('./assets/Dell.png')}
          />
          <Text style={styles.textDescription}>
            O Dell XPS 13 é conhecido por seu design elegante e desempenho robusto. A versão de 2021 apresentou processadores Intel Core i7 de 11ª geração e placas gráficas integradas Iris Xe, garantindo desempenho sólido para tarefas cotidianas e profissionais. O modelo de 2026 provavelmente continuará essa tendência, incorporando os mais recentes processadores e melhorias em design e funcionalidade.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  title: {
    textShadowColor: "limegreen",
    textShadowOffset: { width: 0, height: 5 },
    textShadowRadius: 10,
    color: "lightgreen",
    fontSize: 60,
    fontStyle: "italic",
    fontWeight: 'bold',
    letterSpacing: 2,
  },

  pc: {
    maxWidth: "45%",
    margin: "4%",
    shadowColor: 'limegreen',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.7,
    shadowRadius: 25,
    elevation: 15,
    borderRadius: 15,
    borderColor: 'limegreen',
    borderWidth: 2,
  },

  textDescription: {
    flexWrap: "wrap",
    width: '100%',
    textAlign: "left",
    padding: "2%",
    color: "lightgreen",
    fontStyle: 'italic',
    fontSize: 18,
    lineHeight: 25,
  },

  modelos: {
    width: "100%",
    borderRadius: 10,
    borderWidth: 3,
    borderColor: 'limegreen',
  },
});
