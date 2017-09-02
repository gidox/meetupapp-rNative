import React from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableHighlight,
  StyleSheet    
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { navigationOptions } from '../config/navOptions';  
import { db, auth } from '../config/firebase';
import moment from 'moment';
import 'moment/locale/es';

export default class MeetupDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      event: {},
      assistants: [],
    }
  }

  componentWillMount() {
    const { navigation } = this.props;
    moment().locale('es');
    db.ref(`/events/${navigation.state.params.id}`)
      .once('value', snapshot => {
        this.setState({
          event: snapshot.val(),
          isLoading: false,
          
        })
      })
    db.ref(`/eventAttendees/${navigation.state.params.id}`)
      .on('child_added', snapshot => {
        this.setState({ assistants: this.state.assistants.concat(snapshot.val())})
      })
    
  }
  componentWillUnMount() {
    const { navigation } = this.props;
    db.ref(`/eventAttendees/${navigation.state.params.id}`).off();
    db.ref(`/eventAttendees/`).off();
    
  }
  booking() {
    let userId = auth.currentUser.uid;
    let eventId = this.props.navigation.state.params.id;

    db.ref(`/users/${userId}`)
      .once('value', snapshot => {
        const { email, uid, avatar } = snapshot.val();
        db.ref('/eventAttendees')
          .child(eventId)
          .child(userId)
          .set({ email, uid, avatar })
      })
  }
  static navigationOptions = ({ navigation }) => ({
    title: `Evento de ${navigation.state.params.group}`,
    ...navigationOptions

  }); 
  render(){
    return (
      <ScrollView style={styles.container}>
        <Image style={styles.coverImage} source={require('../assets/meetup-event.jpg') } />
        <Text style={styles.title}>{this.state.event.title}</Text>
        <View style={styles.info}>
          <Icon style={styles.infoIcon} name="calendar-o" size={20} color="grey" />
          <View>
            <Text style={styles.infoText}>{moment(this.state.event.date).fromNow()}</Text>
            <Text style={styles.infoSubText}>{moment(this.state.event.date).format('dddd, DD MMMM')}</Text>
          </View>
        </View>
        <View style={styles.info}>
          <Icon style={styles.infoIcon} name="map-marker" size={20} color="grey" />
          <View>
            <Text style={styles.infoText}>{this.state.event.location}</Text>
            <Text style={styles.infoSubtext}>{this.state.event.locationAddress}</Text>
          </View>
        </View>
        {this.state.assistants.length > 0 && (
          <View style={styles.info}>
            {this.state.assistants.map((attendee, i) => (
              <Image key={i} style={styles.imageAvatar} source={{ uri: attendee.avatar }} />
            ))}
          </View>
        )}
        <View style={styles.info}>
          <TouchableHighlight style={styles.rsvpBtn} onPress={() => this.booking()}>
            <View>
              <Text style={styles.rsvpText}>Apuntarse</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.description}>
          <Text style={styles.descriptionText}>{this.state.event.description}</Text>
        </View>
      </ScrollView>   
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  coverImage: {
    flex: 1,
    height: 300
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginVertical: 10
  },
  info: {
    flexDirection: 'row',
    marginHorizontal: 20
  },
  infoIcon: {
    margin: 10
  },
  infoText: {
    color: 'grey',
    fontSize: 17
  },
  rsvpBtn: {
    flex: 1,
    backgroundColor: 'red',
    margin: 15,
    padding: 10,
    borderRadius: 3
  },
  rsvpText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    margin: 5
  },
  imageAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    margin: 5
  },
  description: {
    backgroundColor: '#eaeaea',
    borderTopWidth: 1,
    borderColor: '#aaa',
    padding: 20,
    marginTop: 10
  },
  descriptionText: {
    fontSize: 17
  }
})