import React from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Dimensions
} from 'react-native';



export default class MeetupList extends React.Component{
  constructor(props){
    super(props); 
    this.state = {
      events: []
    }
  }
  componentWillMount(){
    this.setState({
      events: [
        { title: "Evento de Meetup 1", groupImage: 'https://secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/463140336.jpeg', groupName: 'Reactjs Madrid'},
        { title: "Evento de Meetup 2", groupImage: 'https://secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/463140336.jpeg', groupName: 'Reactjs Madrid'},
        { title: "Evento de Meetup 3", groupImage: 'https://secure.meetupstatic.com/photo_api/event/rx308x180/cpt/cr308x180/ql90/sgb54c13bc46/463140336.jpeg', groupName: 'Reactjs Madrid'},
      ]
    })
  }
  render(){
    return(
      //<Text style={styles.title}>HOLA</Text>
      <ScrollView style={styles.container}>
        {this.state.events.map((event, i) => (
          <TouchableWithoutFeedback
            key={i}
            onPress={() => null}
          >
            <View style={styles.card}>
              <Image style={styles.image} source={{ uri: event.groupImage }}/>
              <View style={styles.cardContent}>
                <Text style={styles.title}>{event.title}</Text>
                <Text>Organizado por {event.groupName}</Text>
                
              </View>
            </View>
          </TouchableWithoutFeedback>
            
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
  card: {
    backgroundColor: 'white',
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 3,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100
  },
  image: {
    width: 100,
    height: 100,
  },
  cardContent: {
    flex: 1,
    padding: 10,
    margin:0
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});