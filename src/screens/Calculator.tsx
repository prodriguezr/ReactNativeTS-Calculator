import React, { useRef, useState } from 'react'
import { View, Text } from 'react-native';

import { CalculatorButton } from '../components';
import { CalculatorTheme } from '../theme';

enum Operators {
    Add, Subtract, Multiply, Divide
}

export const CalculatorScreen = () => {
    const [number, setNumber] = useState('100');
    const [previoussNumber, setPreviousNumber] = useState('0');

    const lastOperator = useRef<Operators>();

    const clear = ():void => {
        setNumber('0');
        setPreviousNumber('0');
    }

    const buildNumber = (numberAsText: string):void => {
        if (lastOperator.current === Operators.Divide && numberAsText === '0') return;
        
        // do not accept double decimal dot
        if (number.includes('.') && numberAsText === '.' ) return;

        if (number.startsWith('0') || number.startsWith('-0')) {
            // Decimal dot
            if (numberAsText === '.') {
                setNumber(number + numberAsText);
            } else if (numberAsText === '0' && number.includes('.')) {
                setNumber(number + numberAsText);
            } else if (numberAsText !== '0' && !number.includes('.')) {
                setNumber(numberAsText);
            } else if ( numberAsText === '0' && !number.includes('.')) {
                setNumber(number);
            } else 
                setNumber(number + numberAsText);
        } else {
            setNumber(number + numberAsText);
        }
    }

    const deleteLastEntry = () => {
        if (number === '0') return;

        if (number.length === 2 && number.includes('-')) {
            setNumber('0');
        } else {
            (number.length === 1) ? setNumber('0') : setNumber(number.slice(0, -1));
        }
    }

    const changeToPrevious = () => {
        if (number.endsWith('.')) {
            setPreviousNumber(number.slice(0, -1));
        } else {
            setPreviousNumber(number);
        }

        setNumber('0');
    }

    const changeSymbol = () => {
        if (number.includes('-')) {
            setNumber(number.replace('-', ''));
        } else {
            setNumber('-' + number);
        }
    }

    const btnAdd = () => {
        changeToPrevious();
        lastOperator.current = Operators.Add;
    }

    const btnSubstract = () => {
        changeToPrevious();
        lastOperator.current = Operators.Subtract;
    }

    const btnMultiply = () => {
        changeToPrevious();
        lastOperator.current = Operators.Multiply;
    }

    const btnDivide = () => {
        changeToPrevious();
        lastOperator.current = Operators.Divide;
    }

    const calculate = () => {
        const num1 = Number(number);
        const num2 = Number(previoussNumber);

        switch (lastOperator.current) {
            case Operators.Add:
                setNumber(`${ num2 + num1 }`);
                break;
            case Operators.Subtract:
                setNumber(`${ num2 - num1 }`);
                break;
            case Operators.Multiply:
                setNumber(`${ num1 * num2 }`);
                break;
            case Operators.Divide:
                setNumber(`${ num2 / num1 }`);
                break;
            default:
                break;
        }

        setPreviousNumber('0');
    }

    return (
        <View style={ CalculatorTheme.calculatorContainer }>
            {
                (previoussNumber !== '0') && (
                    <Text style={ CalculatorTheme.smallResult }>{ previoussNumber }</Text>     
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
                <CalculatorButton text="/" color="white" backgroundColor="orange" onPress={ btnDivide } />
            </View>   
            { /* Button's row */ }
            <View style={ CalculatorTheme.row }>
                <CalculatorButton text="7" onPress={ buildNumber }/>
                <CalculatorButton text="8" onPress={ buildNumber }/>
                <CalculatorButton text="9" onPress={ buildNumber }/>
                <CalculatorButton text="X" color="white" backgroundColor="orange" onPress={ btnMultiply } />
            </View>   
            { /* Button's row */ }
            <View style={ CalculatorTheme.row }>
                <CalculatorButton text="4" onPress={ buildNumber }/>
                <CalculatorButton text="5" onPress={ buildNumber }/>
                <CalculatorButton text="6" onPress={ buildNumber }/>
                <CalculatorButton text="-" color="white" backgroundColor="orange" onPress={ btnSubstract } />
            </View>   
            { /* Button's row */ }
            <View style={ CalculatorTheme.row }>
                <CalculatorButton text="3" onPress={ buildNumber }/>
                <CalculatorButton text="2" onPress={ buildNumber }/>
                <CalculatorButton text="1" onPress={ buildNumber }/>
                <CalculatorButton text="+" color="white" backgroundColor="orange" onPress={ btnAdd } />
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
