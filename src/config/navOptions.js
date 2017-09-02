import React from 'react';
import {
  View,
  Text,
  Button,
} from 'react-native';
import { auth } from './firebase';
export const navigationOptions = {
  headerRight: (
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ color: 'white', paddingVertical: 7, paddingRight: 10 }} >
          { auth.currentUser ? auth.currentUser.email : '' }
        </Text>
        <Button color="orangered" title="Logout" onPress={() => auth.signOut()} />   
      </View>
  ),
  headerStyle: {
    backgroundColor: 'red',
    paddingTop: 25,
    paddingHorizontal: 10,
    height: 80,
  },
  headerTitleStyle: {
    color: 'white',
  },
  headerTintColor: 'white'
}