import * as React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import Header from './componets/header';
import TargetWeek from './componets/targetWeek';
import ForYou from './componets/forYou';
import BookReading from './componets/bookReading';

const Layout = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Header />
        <TargetWeek />
        <ForYou />
        <View style={styles.BookReading}>
          <BookReading />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCCBB9',
    padding: 16,
  },
  BookReading: {
    marginTop: 26,
    padding: 24,
    backgroundColor: 'rgba(252,252,252, 0.3)',
    borderRadius: 12,
  },
});

export default Layout;
