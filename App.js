import React from 'react';
import { View } from 'react-native';

import MeetupList from './src/components/MeetupList';

export default class App extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MeetupList />

      </View>
    );
  }
}