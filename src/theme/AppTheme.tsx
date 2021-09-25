import { StyleSheet } from "react-native";

export default StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: 'black',
    },
    result: {
        color: 'white',
        fontSize: 80,
        textAlign: 'right',
    },
    smallResult: {
        color: 'rgba(255, 255, 255, 0.4)',
        fontSize: 30,
        textAlign: 'right',
    },
    calculatorContainer: {
        flex: 1,
        paddingHorizontal: 22,
        justifyContent: 'flex-end'
    },
    button: {
        height: 100,
        width: 100,
        borderRadius: 100,
        backgroundColor: '#9B9B9B',
        color: 'white',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 40,
        color: 'black',
        textAlign: 'center',
        fontWeight: 'bold',
    }
});
