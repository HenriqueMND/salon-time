import { StyleSheet, Text, TextInput, View } from "react-native";

const InputLoginSenha = () => {
    return (
        <View style={styles.container}>
            <View style={styles.bloco}>
                <Text style={styles.label}>LOGIN</Text>
                <TextInput style={styles.input} />
            </View>
            <View style={styles.bloco}>
                <Text style={styles.label}>SENHA</Text>
                <TextInput style={styles.input} secureTextEntry />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
    },
    bloco: {
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 5,
        color: "#000",
    },
    input: {
        borderWidth: 1,
        borderColor: "#000",
        borderRadius: 5,
        padding: 8,
        backgroundColor: "#fff",
    },
});

export default InputLoginSenha;
