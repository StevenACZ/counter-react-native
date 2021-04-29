// React
import React from 'react';

// React Native
import {Text, View} from 'react-native';

interface Props {}

const HelloWorld: React.FC<Props> = () => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
      }}>
      <Text
        style={{
          fontSize: 45,
        }}>
        Hello World!
      </Text>
    </View>
  );
};

export default HelloWorld;
