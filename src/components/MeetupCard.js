import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableWithoutFeedback,
  StyleSheet    
} from 'react-native';

const MeetupCard = ({navigation, event}) => (
  <TouchableWithoutFeedback
    onPress={() => navigation.navigate('Detail', {
      group: event.groupName,
      id: event.id
    })}
  >
    <View style={styles.card}>
      <Image style={styles.image} source={{ uri: event.groupImage }}/>
      <View style={styles.cardContent}>
        <Text style={styles.title}>{event.title}</Text>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Group', {
            groupName: event.groupName,
            groupId: event.groupId
          })}>
          <View>
            <Text>Organizado por {event.groupName}</Text>

          </View>
        </TouchableWithoutFeedback>
        
      </View>
    </View>
  </TouchableWithoutFeedback>
);
const styles = StyleSheet.create({
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
  },
})
export default MeetupCard;

