import React from 'react';
import { View } from 'react-native';

import AppNavigation from './AppNavigation';
import Auth from './src/components/Auth';
import { auth } from './src/config/firebase';
 
export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
    }
  }
  componentWillMount(){
    auth.onAuthStateChanged(user => this.setState({ user }))

  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        {
          this.state.user
          ? <AppNavigation user={this.state.user} />
          : <Auth />
        } 
      </View>
    );
  }
}