import React from 'react'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { CalculatorScreen } from './src/screens';
import { AppTheme } from './src/theme';

export default () => {
  return (
    <SafeAreaView style={ AppTheme.background }>
      <StatusBar
        backgroundColor="black"
        barStyle="light-content"
      />
      <CalculatorScreen/>
    </SafeAreaView>
  )
}