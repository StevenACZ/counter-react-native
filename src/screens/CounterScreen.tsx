// React
import React, {useState} from 'react';

// React Native
import {StyleSheet, Text, View} from 'react-native';

// Components
import Fab from '../components/Fab';

interface Props {}

const CounterScreen: React.FC<Props> = () => {
  const [counter, setCounter] = useState<number>(10);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter: {counter}</Text>
      <Fab
        title="-1"
        style={styles.fabLocationBL}
        onPress={() => setCounter(counter - 1)}
      />
      <Fab
        title="+1"
        style={styles.fabLocationBR}
        onPress={() => setCounter(counter + 1)}
      />
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
});

export default CounterScreen;
