import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ProgressBar from '../progressBar';

const TargetWeek = () => {
  return (
    <View style={styles.container}>
      <View style={styles.meta}>
        <Text style={StyleSheet.flatten([styles.title, {color: '#835525'}])}>
          Objetivo da semana
        </Text>
        <Text style={StyleSheet.flatten([styles.time, {color: '#835525'}])}>
          200/300 min
        </Text>
      </View>
      <View>
        <ProgressBar />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#D9D9D9',
    paddingHorizontal: 14,
    paddingVertical: 24,
    marginTop: 24,
    borderRadius: 14,
  },
  meta: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: 900,
    fontFamily: 'Okay-Serif',
  },
  time: {
    fontSize: 12,
    fontFamily: 'OpenSans-VariableFont_wdth,wght',
  },
});

export default TargetWeek;
