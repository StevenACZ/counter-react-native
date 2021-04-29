// React
import React, {useState} from 'react';

// React Native
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

interface Props {}

const CounterScreen: React.FC<Props> = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <TouchableOpacity onPress={() => setCounter(counter + 1)}>
        <View style={styles.button}>
          <Text>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 40,
  },
  button: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
});

export default CounterScreen;
