import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions,
  ActivityIndicator
} from 'react-native';
import { navigationOptions } from '../config/navOptions';  
import { db } from '../config/firebase';
import MeetupCard from './MeetupCard';

export default class MeetupList extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      events: [],
      isLoading: true,
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: 'Meetup',
    ...navigationOptions  


  }); 
  componentWillMount(){
    db.ref('events')
      .once('value', snapshot => {
        this.setState({
          events: this.state.events.concat(snapshot.val()),
          isLoading: false,
          
        })
      })
  }
  render(){
    const { navigation } = this.props;
    return this.state.isLoading 
    ? (<ActivityIndicator style={ styles.loader} size={100} color="red" />)
    : (

      //<Text style={styles.title}>HOLA</Text>
      <ScrollView style={styles.container}>
        {this.state.events.map((event, i) => (
          <MeetupCard 
            navigation={this.props.navigation}
            event={event}
            key={i} />
        
        ))}
      </ScrollView>   
    );
  }
}
const { width, height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    height,
    width,
  },
  loader:{
    marginTop: 100
  }
});