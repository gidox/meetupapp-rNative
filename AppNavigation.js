import { StackNavigator } from 'react-navigation';
import MeetupList from './src/components/MeetupList';
import MeetupDetail from './src/components/MeetupDetail';
import MeetupGroupInfo from './src/components/MeetupGroupInfo';
import Auth from './src/components/Auth';

const AppNavigation = StackNavigator({
  Home: { screen: MeetupList },
  Auth: { screen: Auth },  
  Detail: { screen: MeetupDetail },
  Group: { screen: MeetupGroupInfo }
  
})
export default AppNavigation;