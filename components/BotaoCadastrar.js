import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BotaoCadastrar = () => {
    return (
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>CADASTRE-SE</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#72284B",
        paddingVertical: 8,
        paddingHorizontal: 20,
        borderRadius: 5,
        marginTop: 10,
    },
    texto: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
});

export default BotaoCadastrar;
