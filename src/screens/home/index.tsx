import * as React from 'react';

import {View, Text, StyleSheet, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.header}>
      <View style={styles.perfil}>
        <View style={styles.circle}>
          <Image source={require('./../../assets/avatar.png')} />
        </View>

        <Text
          style={StyleSheet.flatten([
            styles.textSize,
            {color: '#835525', marginLeft: 8},
          ])}>
          Oi, Rafael
        </Text>
      </View>

      <View style={styles.circle}>
        <Text style={StyleSheet.flatten([styles.textSize, {color: '#FF6347'}])}>
          1200
        </Text>
      </View>
    </View>
  );
};

const Layout = () => {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
};

const styles = StyleSheet.create({
  textSize: {
    fontSize: 16,
    fontWeight: 900,
  },

  container: {
    flex: 1,
    backgroundColor: '#DCCBB9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 16,
  },
  perfil: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  circle: {
    backgroundColor: '#DEDEDE',
    borderRadius: 100,
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Layout;
