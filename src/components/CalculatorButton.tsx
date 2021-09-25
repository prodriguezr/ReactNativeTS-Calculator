import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ButtonTheme } from '../theme'

interface Props {
    text: string;
    backgroundColor?: string;
    color?: string;
    large?: boolean;
    onPress: (numberAsText: string) => void;
}

export const CalculatorButton = ({ backgroundColor = '#2D2D2D', color = 'white', onPress, text, large = false }: Props) => {
    return (
        <TouchableOpacity
            onPress={ () => onPress(text) }
        >
            <View style={{
                ...ButtonTheme.button,
                backgroundColor,
                width: (large) ? 156 : 70,
            }}>
                <Text style={{
                    ...ButtonTheme.textButton,
                    color,
                }}>{ text }</Text>
            </View>
        </TouchableOpacity>
    )
}
