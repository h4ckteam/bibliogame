import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

const ProgressBar = () => {
  const [progress, setProgress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: 300,
      duration: 1000,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.bar, {width: progress}]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 10,
    backgroundColor: '#EFEDED',
    borderRadius: 10,
    marginTop: 14,
  },
  bar: {
    height: 10,
    backgroundColor: '#FF6347',
    borderRadius: 10,
  },
});

export default ProgressBar;
