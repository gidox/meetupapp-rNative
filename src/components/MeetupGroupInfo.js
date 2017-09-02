import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  Dimensions,
  StyleSheet,
  ActivityIndicator    
} from 'react-native';
import { navigationOptions } from '../config/navOptions';  
import MeetupCard from './MeetupCard';
import { db } from '../config/firebase';

const { width, height } = Dimensions.get('window');

export default class MeetupGroupInfo extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      info: {},
      events: [],
    }
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Acerca de ${navigation.state.params.groupName}`,
    ...navigationOptions  


  }); 

  componentWillMount() {
    const { navigation } = this.props;
    db.ref(`/groups/${navigation.state.params.groupId}`)
      .once('value', snapshot => {
        this.setState({
          info: snapshot.val()

        })
      })
    db.ref(`/events`)
      .orderByChild('groupName')
      .equalTo(navigation.state.params.groupName)
      .on('child_added', snapshot => {
        this.setState({
          events: this.state.events.concat(snapshot.val())

        })
      })
  }
  componentWillUnMount() {
    db.ref(`/events/`).off();
    
  }
  render() { 
    return (
  
        <ScrollView style={styles.container}>
          {this.state.info 
            ? (<View>          
                <Image style={styles.image} source={{ uri: this.state.info.image }} />
                <Text style={styles.title}>{this.state.info.name}</Text>
                <Text style={styles.about}>{this.state.info.about}</Text>
                <Text style={styles.title}>Ultimos eventos: </Text>
                {this.state.events.length > 0 && (
                  <View>
                    {this.state.events.map((event, i) => (
                      <MeetupCard 
                        navigation={this.props.navigation}
                        event={event}
                        key={i}
                      />
                    ))}
                  </View>
                )}
              </View>)
            : (<ActivityIndicator style={ styles.loader} size={100} color="red" />)
          }

          
          
        </ScrollView>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: 220
  },
  title: {
    padding: 20,
    textAlign: 'center',
    borderColor: '#ccc',
    borderBottomWidth: 2,
    fontSize: 20,
    fontWeight: 'bold'
  },
  about: {
    margin: 15
  }
})