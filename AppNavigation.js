import { StackNavigator } from 'react-navigation';
import MeetupList from './src/components/MeetupList';
import MeetupDetail from './src/components/MeetupDetail';

const AppNavigation = StackNavigator({
  Home: { screen: MeetupList },
  Detail: { screen: MeetupDetail },
  
})
export default AppNavigation;