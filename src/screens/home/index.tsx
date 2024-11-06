import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import Header from './componets/header';
import TargetWeek from './componets/targetWeek';
import ForYou from './componets/forYou';

const Layout = () => {
  return (
    <View style={styles.container}>
      <Header />
      <TargetWeek />
      <ForYou />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCCBB9',
    padding: 16,
  },
});

export default Layout;
