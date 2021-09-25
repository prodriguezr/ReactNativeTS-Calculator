import React from 'react'
import { View, Text } from 'react-native';

import { CalculatorButton } from '../components';
import { CalculatorTheme } from '../theme';

import { useCalculator } from '../hooks';

export const CalculatorScreen = () => {

    const { 
        add, 
        substract, 
        multiply, 
        divide, 
        clear, 
        changeSymbol, 
        deleteLastEntry, 
        buildNumber, 
        calculate,
        previousNumber,
        number,
    } = useCalculator();

    return (
        <View style={ CalculatorTheme.calculatorContainer }>
            {
                (previousNumber !== '0') && (
                    <Text style={ CalculatorTheme.smallResult }>{ previousNumber }</Text>     
                )
            }
            <Text style={ CalculatorTheme.result }
                numberOfLines={ 1 }
                adjustsFontSizeToFit>{ number }</Text>  

            { /* Button's row */ }
            <View style={ CalculatorTheme.row }>
                <CalculatorButton text="C" color="black" backgroundColor="#9B9B9B" onPress={ clear } />
                <CalculatorButton text="+/-" color="black" backgroundColor="#9B9B9B" onPress={ changeSymbol } />
                <CalculatorButton text="DEL" color="black" backgroundColor="#9B9B9B" onPress={ deleteLastEntry } />
                <CalculatorButton text="/" color="white" backgroundColor="orange" onPress={ divide } />
            </View>   
            { /* Button's row */ }
            <View style={ CalculatorTheme.row }>
                <CalculatorButton text="7" onPress={ buildNumber }/>
                <CalculatorButton text="8" onPress={ buildNumber }/>
                <CalculatorButton text="9" onPress={ buildNumber }/>
                <CalculatorButton text="X" color="white" backgroundColor="orange" onPress={ multiply } />
            </View>   
            { /* Button's row */ }
            <View style={ CalculatorTheme.row }>
                <CalculatorButton text="4" onPress={ buildNumber }/>
                <CalculatorButton text="5" onPress={ buildNumber }/>
                <CalculatorButton text="6" onPress={ buildNumber }/>
                <CalculatorButton text="-" color="white" backgroundColor="orange" onPress={ substract } />
            </View>   
            { /* Button's row */ }
            <View style={ CalculatorTheme.row }>
                <CalculatorButton text="3" onPress={ buildNumber }/>
                <CalculatorButton text="2" onPress={ buildNumber }/>
                <CalculatorButton text="1" onPress={ buildNumber }/>
                <CalculatorButton text="+" color="white" backgroundColor="orange" onPress={ add } />
            </View>   
            { /* Button's row */ }
            <View style={ CalculatorTheme.row }>
                <CalculatorButton text="0" onPress={ buildNumber } large />
                <CalculatorButton text="." onPress={ buildNumber } />
                <CalculatorButton text="=" color="white" backgroundColor="orange" onPress={ calculate } />
            </View>   
        </View>
    )
}
