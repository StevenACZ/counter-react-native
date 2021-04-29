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
      <TouchableOpacity
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>-1</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)}>
        <View style={styles.fab}>
          <Text style={styles.fabText}>+1</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 40,
  },
  fabLocationBL: {
    position: 'absolute',
    bottom: 20,
    left: 20,
  },
  fabLocationBR: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  fab: {
    backgroundColor: '#5856D6',
    width: 60,
    height: 60,
    borderRadius: 100,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  fabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default CounterScreen;
