import * as React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

const ForYou = () => {
  return (
    <View style={styles.containerForYou}>
      <View style={styles.headerForYou}>
        <View>
          <Text
            style={StyleSheet.flatten([{color: '#835525', fontWeight: 900}])}>
            Para você
          </Text>
        </View>
        <View style={styles.buttonsLeftRight}>
          <View>
            <TouchableOpacity style={styles.spacebutton}>
              <Image source={require('../../../../assets/left.png')} />
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <Image source={require('../../../../assets/right.png')} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerForYou: {
    marginTop: 40,
  },
  buttonsLeftRight: {
    flexDirection: 'row',
  },
  headerForYou: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spacebutton: {
    marginHorizontal: 10,
  },
});
export default ForYou;
