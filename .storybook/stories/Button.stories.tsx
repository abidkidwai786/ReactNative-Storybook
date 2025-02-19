import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { Button, View } from 'react-native';

storiesOf('Button', module).add('default', () => (
  <View>
    <Button title="Click Me" onPress={() => alert('Button Clicked!')} />
  </View>
));
