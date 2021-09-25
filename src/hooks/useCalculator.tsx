import { useRef, useState } from "react";

enum Operators {
    Add, Subtract, Multiply, Divide
}

export default () => {
    const [number, setNumber] = useState('0');
    const [previousNumber, setPreviousNumber] = useState('0');

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

    const add = () => {
        changeToPrevious();
        lastOperator.current = Operators.Add;
    }

    const substract = () => {
        changeToPrevious();
        lastOperator.current = Operators.Subtract;
    }

    const multiply = () => {
        changeToPrevious();
        lastOperator.current = Operators.Multiply;
    }

    const divide = () => {
        changeToPrevious();
        lastOperator.current = Operators.Divide;
    }

    const calculate = () => {
        try {
            const num1 = Number(number);
            const num2 = Number(previousNumber);

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
            
        } catch (error) {
            setNumber('<Err/>')
        }
    }

    return {
        add,
        buildNumber,
        calculate,
        changeSymbol,
        changeToPrevious,
        clear,
        deleteLastEntry,
        divide,
        multiply,
        substract,
        previousNumber,
        number,
    }
}