import { StyleSheet } from "react-native";

export default StyleSheet.create({
    result: {
        color: 'white',
        fontSize: 50,
        textAlign: 'right',
        marginBottom: 18,
    },
    smallResult: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 26,
        textAlign: 'right',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 22,
        justifyContent: 'flex-end'
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 18,
        paddingHorizontal: 10,
    },
});
