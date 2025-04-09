import { StyleSheet, Text, TouchableOpacity } from "react-native";

const BotaoEntrar = () => {
    return (
        <TouchableOpacity style={styles.botao}>
            <Text style={styles.texto}>ENTRAR</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    botao: {
        backgroundColor: "#00e90c",
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 5,
        alignItems: "center",
        marginVertical: 10,
    },
    texto: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});

export default BotaoEntrar;
