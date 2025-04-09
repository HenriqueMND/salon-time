import { StyleSheet, View } from "react-native";
import InputLoginSenha from "./components/InputLoginSenha";
import BotaoEntrar from "./components/BotaoEntrar";
import BotaoEsqueceuSenha from "./components/BotaoEsqueceuSenha";
import BotaoCadastrar from "./components/BotaoCadastrar";

const App = () => {
  return (
    <View style={styles.container}>
      <InputLoginSenha />
      <BotaoEntrar />
      <BotaoEsqueceuSenha />
      <BotaoCadastrar />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#f621eb"
  },
});

export default App;
