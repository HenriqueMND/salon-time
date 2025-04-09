import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BotaoEsqueceuSenha = () => {
    return (
        <TouchableOpacity>
            <Text style={styles.texto}>ESQUECEU A SENHA ?</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    texto: {
        color: "#72284B",
        fontSize: 14,
        marginTop: 10,
        textAlign: "center",
    },
});

export default BotaoEsqueceuSenha;
