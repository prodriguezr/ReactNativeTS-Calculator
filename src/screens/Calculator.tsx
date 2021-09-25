import React from 'react'
import { View, Text } from 'react-native';
import { AppTheme } from '../theme';

export const CalculatorScreen = () => {
    return (
        <View style={ AppTheme.calculatorContainer }>
            <Text style={ AppTheme.smallResult }>1,000.00</Text>     
            <Text style={ AppTheme.result }>1,500.00</Text>  

            <View>
                {/* Button */}
                <View style={ AppTheme.button }>
                    <Text style={ AppTheme.textButton }>1</Text>
                </View>
            </View>   
        </View>
    )
}
