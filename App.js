import React from 'react';
import { View } from 'react-native';

import AppNavigation from './AppNavigation';
import MeetupList from './src/components/MeetupList';
import Auth from './src/components/Auth';

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      user: null,
    }
  }
  componentWillMount(){
    setTimeout(() => {
      this.setState({
        user: { email: 'yo@email.com'}
      });
    }, 3000)
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <MeetupList />
        {/* {
          this.state.user
          ? <AppNavigation user={this.state.user} />
          : <Auth />
        } */}
      </View>
    );
  }
}